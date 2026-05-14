import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-[#800000] py-24 text-center text-white">
      <div className="mx-auto max-w-4xl px-6">

        <h2 className="mb-8 text-5xl font-black">
          Your Child's Future Starts Here
        </h2>

        <p className="mb-12 text-xl text-white/80">
          Join a legacy of excellence.
        </p>

        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <Button
            size="lg"
            className="bg-white text-[#800000] hover:bg-slate-100"
          >
            Start Application
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/10"
          >
            Schedule Campus Tour
          </Button>
        </div>

      </div>
    </section>
  );
}