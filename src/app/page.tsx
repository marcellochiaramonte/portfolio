import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Marcello Chiaramonte</h1>
        <p className="text-gray-600 mt-2">Senior Software Engineer</p>
      </header>

      <section className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div>
            <h3 className="text-xl font-medium">Frontend Development</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Angular</li>
              <li>React</li>
              <li>Redux, Zustand, RxJS</li>
              <li>ChartJS, Angular Material</li>
              <li>Material UI, TailwindCSS</li>
              <li>i18next (Multi-language support)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Backend Development</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Python, Micropython</li>
              <li>Spring Boot, Hibernate, JPA</li>
              <li>Wildfly, GraphQL, xState, RxJS</li>
              <li>REST APIs (OpenAPI 3)</li>
              <li>Kafka, RabbitMQ, WebSockets</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mt-4">Databases</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>SQL: MSSQL, Postgres, Oracle</li>
              <li>NoSQL: InfluxDB, MongoDB, Redis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mt-4">DevOps & Cloud</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Jenkins, GitLab Pipelines, Grafana</li>
              <li>Openshift, Kubernetes, Helm Charts</li>
              <li>Linux Management, Terraform</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-2 text-gray-700">
          <li>Roche - GUI and backend integration of medical devices</li>
          <li>
            Julius Bär - Trading GUI, Kafka Integration with Java Services
          </li>
          <li>Bosch/Syntegon - GUI and backend industrial integration</li>
          <li>Fraunhofer Institute - Logistics management platform</li>
        </ul>
      </section>

      <section className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700">
          Email:{" "}
          <a href="mailto:marcello@chiaramonte.me" className="text-blue-500">
            marcello@chiaramonte.me
          </a>
        </p>
        <p className="text-gray-700">Location: Zürich, Switzerland</p>
      </section>

      <footer className="mt-8 flex space-x-4">
        <Link
          href="https://github.com/marcellochiaramonte"
          className="text-gray-700"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/marcello-chiaramonte"
          className="text-gray-700"
          target="_blank"
        >
          LinkedIn
        </Link>
      </footer>
    </div>
  );
}
