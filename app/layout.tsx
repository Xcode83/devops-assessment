export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>DevOps Assessment</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50">
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1>DevOps Assessment - Next.js App</h1>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-200 text-center p-4 mt-4">
          © 2025 Biswajit
        </footer>
      </body>
    </html>
  )
}
