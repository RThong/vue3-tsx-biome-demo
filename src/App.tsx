import { defineComponent } from "vue"
import vueLogo from "./assets/vue.svg"
import HelloWorld from "./components/HelloWorld.tsx"

const App = defineComponent(() => {
	return () => (
		<div class="min-h-screen bg-white dark:bg-slate-800">
			<div class="py-8 px-4">
				<div class="flex justify-center gap-8">
					<a href="https://vite.dev" target="_blank" rel="noreferrer">
						<img
							src="/vite.svg"
							class="h-24 p-6 hover:drop-shadow-[0_0_2em_#646cffaa] transition-[filter] duration-300"
							alt="Vite logo"
						/>
					</a>
					<a href="https://vuejs.org/" target="_blank" rel="noreferrer">
						<img
							src={vueLogo}
							class="h-24 p-6 hover:drop-shadow-[0_0_2em_#42b883aa] transition-[filter] duration-300"
							alt="Vue logo"
						/>
					</a>
				</div>

				<HelloWorld msg="Vite + Vue" />
			</div>
		</div>
	)
})

export default App
