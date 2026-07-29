import Link from "next/link";
import {
  ShieldCheck,
  Wand2,
  ArrowRight,
  MonitorSmartphone,
  Eye,
  Timer,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3eefc] p-4 md:p-6 lg:p-8 font-sans">
      <div className="mx-auto flex min-h-[90vh] max-w-[1400px] flex-col rounded-[2.5rem] bg-white shadow-2xl relative overflow-hidden border border-white/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <header className="relative z-10 w-full px-8 py-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                QuizGuard
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link
                href="#product"
                className="hover:text-black transition-colors"
              >
                Product
              </Link>
              <Link
                href="#how-it-works"
                className="hover:text-black transition-colors"
              >
                How it works
              </Link>
              <Link
                href="#pricing"
                className="hover:text-black transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="hover:text-black transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="hidden md:block text-sm font-semibold text-slate-600 hover:text-black transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
              >
                Try QuizGuard <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-12 text-center md:pt-24">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
            Fair, secure, scalable <Wand2 className="h-4 w-4 text-blue-600" />
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl md:leading-[1.1]">
            Test fairer with AI and <br className="hidden md:block" />{" "}
            collaborate seamlessly
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Say goodbye to browser switching and second-guessing academic
            integrity. QuizGuard helps you proctor any exam in just a few
            clicks.
          </p>

          <Link
            href="/signup"
            className="mt-10 flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-base font-medium text-white transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
          >
            Start testing smarter <Wand2 className="h-4 w-4" />
          </Link>
        </section>

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-[2rem] bg-gradient-to-br from-pink-300 via-white to-blue-300 p-[2px] shadow-lg transition-all hover:shadow-xl">
              <div className="flex h-full flex-col rounded-[calc(2rem-2px)] bg-white p-8">
                <div className="mb-auto flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50">
                    <MonitorSmartphone className="h-6 w-6 text-slate-700" />
                  </div>
                  <span className="text-sm font-medium text-slate-400">
                    Step 1 / 3
                  </span>
                </div>
                <div className="mt-12">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Create or Join
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    Drop in your test code — anything from a mid-term to a
                    practice PYQ. Accessible via link or QR scan.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 via-purple-500 to-orange-400 p-8 text-white shadow-xl">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                  <Eye className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-3xl font-bold tracking-tight">
                Edge-AI Proctoring
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                Detect faces, track eyes, and monitor browser activity entirely
                on the student's device. Zero server lag, total privacy.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  Face Detection ✓
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  Tab Tracking ✓
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  Object AI ✦
                </span>
              </div>
            </div>

            <div className="group rounded-[2rem] bg-gradient-to-br from-purple-300 via-white to-orange-200 p-[2px] shadow-lg transition-all hover:shadow-xl">
              <div className="flex h-full flex-col rounded-[calc(2rem-2px)] bg-white p-8">
                <div className="mb-auto flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50">
                    <Timer className="h-6 w-6 text-slate-700" />
                  </div>
                  <span className="text-sm font-medium text-slate-400">
                    Step 3 / 3
                  </span>
                </div>
                <div className="mt-12">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Dynamic Scoring
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    AI calculates marks instantly based on time and accuracy.
                    Answering faster yields a higher score, stopping answer
                    sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
