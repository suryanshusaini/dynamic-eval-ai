import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  BrainCircuit,
  Trophy,
  Users,
  Zap,
  HelpCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight">
              QuizGuard AI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link
              href="#features"
              className="hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-blue-600 transition-colors"
            >
              How to Host
            </Link>
            <Link href="#faq" className="hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Link
              href="/practice"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Practice PYQs
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:block text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Sign up free
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
          Assessments Reimagined with{" "}
          <span className="text-blue-600">Edge AI</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          A completely free, infinitely scalable web testing platform. Prevent
          cheating with local AI proctoring and discourage answer-sharing with
          our dynamic time-based scoring engine.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/practice"
            className="group flex w-full sm:w-auto items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95"
          >
            Try a Demo Quiz
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#how-it-works"
            className="flex w-full sm:w-auto items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95"
          >
            See how it works
          </Link>
        </div>
      </section>

      <section
        id="features"
        className="bg-white py-24 border-y border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What makes us different?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Built for scale, designed for fairness.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Edge-AI Proctoring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We track head movement, eye gaze, and detect objects entirely in
                your browser. Zero server lag, 100% privacy, and completely free
                to host.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Time-Decay Scoring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Answering in 5 seconds vs 29 seconds yields different marks. Our
                algorithm automatically adjusts scores to eliminate peer-to-peer
                cheating.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Unlimited Concurrency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No more 30-student limits. Because our AI runs locally on the
                student's device, you can host an exam for 1,000 students at
                zero cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Host Live in 3 Simple Steps
            </h2>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold">Create your Quiz</h4>
                  <p className="text-slate-600 mt-1">
                    Set your questions, time limits per question, and AI
                    strictness level.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold">Share Link or QR Code</h4>
                  <p className="text-slate-600 mt-1">
                    Students can join instantly by scanning a QR code or
                    entering a 6-digit pin. No forced account creation for mock
                    tests.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold">Watch Live Telemetry</h4>
                  <p className="text-slate-600 mt-1">
                    Monitor the entire class on your dashboard. Export the
                    dynamic leaderboard directly to Excel.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="flex items-center font-bold text-lg">
                <Trophy className="w-5 h-5 text-amber-500 mr-2" /> Live
                Leaderboard
              </h3>
              <span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <Zap className="w-3 h-3 mr-1" /> Live Updates
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-400">1</span>
                  <div className="font-semibold text-sm">Suryanshu S.</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">98.5 pts</div>
                  <div className="text-xs text-slate-500">Avg time: 4.2s</div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3 border border-red-100">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-400">2</span>
                  <div className="font-semibold text-sm">Student B</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">82.1 pts</div>
                  <div className="text-xs text-red-500 flex items-center gap-1">
                    Avg time: 24s{" "}
                    <ShieldCheck className="w-3 h-3 text-red-500" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-400">3</span>
                  <div className="font-semibold text-sm">Student C</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">79.0 pts</div>
                  <div className="text-xs text-slate-500">Avg time: 18.5s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-100 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12">
            Questions Meet Answers
          </h2>

          <div className="space-y-6 text-left">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h4 className="flex items-center font-bold text-lg text-slate-900">
                <HelpCircle className="w-5 h-5 text-blue-600 mr-3" /> Do
                students need to create an account?
              </h4>
              <p className="mt-2 text-slate-600 ml-8 text-sm leading-relaxed">
                No! For practice tests and PYQs, students can join directly.
                However, for official teacher-hosted exams, a login is required
                to properly record results to the classroom Excel sheet.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h4 className="flex items-center font-bold text-lg text-slate-900">
                <HelpCircle className="w-5 h-5 text-blue-600 mr-3" /> Will the
                AI proctoring lag my computer?
              </h4>
              <p className="mt-2 text-slate-600 ml-8 text-sm leading-relaxed">
                Not at all. Unlike other platforms that stream heavy 30 FPS
                video to a server, our AI is throttled to 2-3 frames per second
                and runs strictly on your local browser edge, requiring almost
                zero bandwidth.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h4 className="flex items-center font-bold text-lg text-slate-900">
                <HelpCircle className="w-5 h-5 text-blue-600 mr-3" /> How does
                time-based scoring work?
              </h4>
              <p className="mt-2 text-slate-600 ml-8 text-sm leading-relaxed">
                If two students answer correctly, but one answers in 5 seconds
                and the other in 29 seconds, they receive slightly different
                marks based on the teacher's time-decay algorithm. This
                eliminates the advantage of sharing answers during remote tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white tracking-tight">
                QuizGuard AI
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              A capstone project dedicated to creating a scalable, free, and
              fair remote assessment environment using modern web technologies
              and edge AI.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/practice"
                  className="hover:text-blue-400 transition-colors"
                >
                  Practice PYQs
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-blue-400 transition-colors"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="hover:text-blue-400 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:suryanshusaini2009@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/suryanshusaini/dynamic-eval-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About the Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} QuizGuard AI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
