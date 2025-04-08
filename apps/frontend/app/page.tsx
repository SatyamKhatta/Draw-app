// import { Button } from "@repo/ui/button";
// import { Card } from "@repo/ui/card";
// import { Pencil, Share2, Users2, Sparkles, Github, Download } from "lucide-react";
// import Link from "next/link";


// function App() {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <header className="relative overflow-hidden">
//         <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
//               Collaborative Whiteboarding
//               <span className="text-primary block">Made Simple</span>
//             </h1>
//             <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
//               Create, collaborate, and share beautiful diagrams and sketches with our intuitive drawing tool. 
//               No sign-up required.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <Link href={"/signin"}>
//                 <Button variant={"primary"} size="lg" className="h-12 px-6">
//                   Sign in
//                   <Pencil className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//               <Link href="/signup">
//                 <Button variant="outline" size="lg" className="h-12 px-6">
//                   Sign up
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section className="py-24 bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
//             <Card className="p-6 border-2 hover:border-primary transition-colors">
//               <div className="flex items-center gap-4">
//                 <div className="p-2 rounded-lg bg-primary/10">
//                   <Share2 className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-semibold">Real-time Collaboration</h3>
//               </div>
//               <p className="mt-4 text-muted-foreground">
//                 Work together with your team in real-time. Share your drawings instantly with a simple link.
//               </p>
//             </Card>

//             <Card className="p-6 border-2 hover:border-primary transition-colors">
//               <div className="flex items-center gap-4">
//                 <div className="p-2 rounded-lg bg-primary/10">
//                   <Users2 className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-semibold">Multiplayer Editing</h3>
//               </div>
//               <p className="mt-4 text-muted-foreground">
//                 Multiple users can edit the same canvas simultaneously. See who's drawing what in real-time.
//               </p>
//             </Card>

//             <Card className="p-6 border-2 hover:border-primary transition-colors">
//               <div className="flex items-center gap-4">
//                 <div className="p-2 rounded-lg bg-primary/10">
//                   <Sparkles className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-semibold">Smart Drawing</h3>
//               </div>
//               <p className="mt-4 text-muted-foreground">
//                 Intelligent shape recognition and drawing assistance helps you create perfect diagrams.
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-primary rounded-3xl p-8 sm:p-16">
//             <div className="mx-auto max-w-2xl text-center">
//               <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
//                 Ready to start creating?
//               </h2>
//               <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
//                 Join thousands of users who are already creating amazing diagrams and sketches.
//               </p>
//               <div className="mt-10 flex items-center justify-center gap-x-6">
//                 <Button size="lg" variant="secondary" className="h-12 px-6">
//                   Open Canvas
//                   <Pencil className="ml-2 h-4 w-4" />
//                 </Button>
//                 <Button variant="outline" size="lg" className="h-12 px-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
//                   View Gallery
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t">
//         <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
//             <p className="text-sm text-muted-foreground">
//               © 2024 Excalidraw Clone. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="https://github.com" className="text-muted-foreground hover:text-primary">
//                 <Github className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-primary">
//                 <Download className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;



import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Pencil, Share2, Users2, Sparkles, Github, Download } from "lucide-react";
import Link from "next/link";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
            Collaborative Whiteboarding
            <span className="block text-white">Made Simple</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Create, collaborate, and share beautiful diagrams and sketches with our intuitive drawing tool. 
            No sign-up required.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/signin">
              <Button className="h-12 px-6 bg-cyan-500 text-black font-semibold rounded-xl glow transition-all hover:scale-105 hover:shadow-cyan-500">
                Sign in
                <Pencil className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="h-12 px-6 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all rounded-xl">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black animate-fade-in-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 glass border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-cyan-900/30">
                  <Share2 className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">Real-time Collaboration</h3>
              </div>
              <p className="mt-4 text-gray-400">
                Work together with your team in real-time. Share your drawings instantly with a simple link.
              </p>
            </Card>

            <Card className="p-6 glass border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-cyan-900/30">
                  <Users2 className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">Multiplayer Editing</h3>
              </div>
              <p className="mt-4 text-gray-400">
                Multiple users can edit the same canvas simultaneously. See who's drawing what in real-time.
              </p>
            </Card>

            <Card className="p-6 glass border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-cyan-900/30">
                  <Sparkles className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">Smart Drawing</h3>
              </div>
              <p className="mt-4 text-gray-400">
                Intelligent shape recognition and drawing assistance helps you create perfect diagrams.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-700/10 border border-cyan-500 rounded-3xl p-8 sm:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold mb-6 text-cyan-400">Ready to start creating?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
                Join thousands of users who are already creating amazing diagrams and sketches.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="h-12 px-6 bg-cyan-500 text-black font-bold rounded-xl glow hover:scale-105 transition-all">
                  Open Canvas <Pencil className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" className="h-12 px-6 text-cyan-300 border border-cyan-500 hover:bg-cyan-500 hover:text-black rounded-xl transition-all">
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800 text-center text-gray-500 animate-fade-in">
        <p>© 2024 Excalidraw Clone. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-cyan-400">
          <a href="https://github.com" className="hover:text-white transition-colors"><Github /></a>
          <a href="#" className="hover:text-white transition-colors"><Download /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
