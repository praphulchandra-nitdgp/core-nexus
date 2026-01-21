import Navbar from "@/components/Navbar";
import AuditionForm from "@/components/AuditionForm";
import Footer from "@/components/Footer";

const Apply = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Abstract background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="abstract-blob blob-purple w-96 h-96 top-20 -left-48 animate-blob-move" />
        <div className="abstract-blob blob-cyan w-80 h-80 top-1/3 right-0 animate-blob-move" style={{ animationDelay: '-5s' }} />
        <div className="abstract-blob blob-pink w-72 h-72 bottom-1/4 left-1/4 animate-blob-move" style={{ animationDelay: '-10s' }} />
      </div>

      <Navbar />
      <main className="relative z-10 pt-24 pb-16">
        <AuditionForm />
      </main>
      <Footer />
    </div>
  );
};

export default Apply;