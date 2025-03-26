import type { FormInstance, FormProps } from "ant-design-vue"
import { Button, Form, FormItem, Input, Space } from "ant-design-vue"

interface User {
	first: string
	last?: string
	id: number
}

const AntdTest = defineComponent(() => {
	const formRef = ref<FormInstance>()

	const dynamicValidateForm = reactive<{ users: User[] }>({
		users: [
			{
				first: "12333",
				id: 1
			}
		]
	})
	const removeUser = (item: User) => {
		const index = dynamicValidateForm.users.indexOf(item)
		if (index !== -1) {
			dynamicValidateForm.users.splice(index, 1)
		}
	}
	const addUser = () => {
		dynamicValidateForm.users.push({
			first: "",
			last: "",
			id: Date.now()
		})
	}

	const onFinish: FormProps["onFinish"] = (values) => {
		console.log("Received values of form:", values)
		console.log("dynamicValidateForm.users:", dynamicValidateForm.users)
	}

	return () => (
		<div>
			<Form
				ref={formRef}
				name="dynamic_form_nest_item"
				model={dynamicValidateForm}
				onFinish={onFinish}
			>
				{dynamicValidateForm.users.map((user, index) => (
					<div key={user.id} class="flex mb-2 items-baseline">
						<Space
							key={user.id}
							class="flex mb-2 items-baseline"
							align="baseline"
						>
							<FormItem
								name={["users", index, "first"]}
								rules={{
									required: true,
									message: "Missing first name"
								}}
							>
								<div class="flex items-center">
									<Input v-model:value={user.first} placeholder="First Name" />
									<Button type="dashed" onClick={() => removeUser(user)}>
										-
									</Button>
								</div>
							</FormItem>
						</Space>
					</div>
				))}

				<FormItem>
					<Button type="dashed" block onClick={addUser}>
						+ Add user
					</Button>
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</FormItem>
			</Form>
		</div>
	)
})

export default AntdTest
