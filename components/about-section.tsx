import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="relative w-full bg-neutral-950 py-20">
      {/* Background elements matching hero-1.tsx vibe */}
      <div className="absolute top-0 z-[0] h-full w-full bg-neutral-900/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="relative z-10 mx-auto max-w-full px-4 md:px-8">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="font-geist mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-5xl">
            Empowering Creativity,{" "}
            <span className="bg-gradient-to-r from-purple-300 to-orange-200 bg-clip-text text-transparent">
              Accelerating Design
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            At our core, we believe in democratizing design. Our mission is to provide designers and developers with the
            most comprehensive and intuitive UI kits, enabling them to bring their visions to life with unprecedented
            speed and precision. We are committed to fostering innovation and simplifying complex design workflows.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-neutral-900 p-6 text-center shadow-lg">
            <CheckCircle className="mx-auto h-8 w-8 text-purple-400" />
            <h3 className="mt-4 text-xl font-semibold text-white">Innovation-Driven</h3>
            <p className="mt-2 text-gray-400">
              Constantly evolving our tools and resources to stay ahead of design trends.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-neutral-900 p-6 text-center shadow-lg">
            <CheckCircle className="mx-auto h-8 w-8 text-orange-400" />
            <h3 className="mt-4 text-xl font-semibold text-white">Community-Focused</h3>
            <p className="mt-2 text-gray-400">
              Building a supportive ecosystem for designers to share, learn, and grow.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-neutral-900 p-6 text-center shadow-lg">
            <CheckCircle className="mx-auto h-8 w-8 text-green-400" />
            <h3 className="mt-4 text-xl font-semibold text-white">Quality-Obsessed</h3>
            <p className="mt-2 text-gray-400">Delivering pixel-perfect components and robust design systems.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
