import { defineComponent, ref } from "vue"

const HelloWorld = defineComponent(
	(props: { msg: string }) => {
		// 就像在 <script setup> 中一样使用组合式 API
		const count = ref(0)

		return () => (
			<div class="text-center">
				<h1 class="text-5xl font-bold mt-8 mb-12 text-gray-800 dark:text-gray-200">
					{props.msg}
				</h1>

				<div class="p-8">
					<button
						type="button"
						onClick={() => {
							count.value++
						}}
						class="rounded-lg border border-transparent px-5 py-2.5 bg-[#f9f9f9] dark:bg-slate-700 hover:border-[#646cff] dark:hover:border-[#42b883] transition-colors duration-300"
					>
						count is {count.value}
					</button>

					<p class="mt-4 text-gray-600 dark:text-gray-400">
						Edit{" "}
						<code class="font-mono bg-gray-100 dark:bg-slate-600 p-1 rounded">
							components/HelloWorld.tsx
						</code>{" "}
						to test HMR
					</p>
				</div>

				<p class="mt-4">
					<a
						href="https://vuejs.org/guide/quick-start.html#local"
						target="_blank"
						class="text-[#646cff] dark:text-[#42b883] hover:text-[#747bff] dark:hover:text-[#42d392] transition-colors duration-300"
						rel="noreferrer"
					>
						create-vue
					</a>
					, the official Vue + Vite starter
				</p>

				<p class="mt-4">
					Learn more about IDE Support for Vue in the
					<a
						href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
						target="_blank"
						class="text-[#646cff] dark:text-[#42b883] hover:text-[#747bff] dark:hover:text-[#42d392] transition-colors duration-300 ml-1"
						rel="noreferrer"
					>
						Vue Docs Scaling up Guide
					</a>
				</p>

				<p class="mt-16 text-gray-400">
					Click on the Vite and Vue logos to learn more
				</p>
			</div>
		)
	},
	// 目前仍然需要手动声明运行时的 props
	{
		props: ["msg"]
	}
)

export default HelloWorld
