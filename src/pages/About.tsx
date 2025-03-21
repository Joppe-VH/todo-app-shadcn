function About() {
  return (
    <div className="container mx-auto flex max-w-5xl flex-col gap-8 p-4">
      <h1 className="mt-4 text-3xl font-bold">About This Project</h1>

      <div className="flex flex-col gap-6">
        <p className="text-lg">
          This Todo application was built using modern web technologies to demonstrate best practices in frontend
          development.
        </p>

        <h2 className="mt-4 text-2xl font-bold">Technologies Used</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">Frontend Framework</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>React 19</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>React Router 7</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">State Management</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Redux Toolkit</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Redux Persist</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">UI & Styling</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Tailwind CSS 4</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Radix UI components</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Lucide React icons</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Sonner toast notifications</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">Development Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Vite</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>ESLint</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>JSON Server for mock API</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
