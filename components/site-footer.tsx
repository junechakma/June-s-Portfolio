"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const VERBS = [
  "Accomplishing","Actioning","Actualizing","Architecting","Baking","Beaming",
  "Beboppin'","Befuddling","Billowing","Blanching","Bloviating","Boogieing",
  "Boondoggling","Booping","Bootstrapping","Brewing","Bunning","Burrowing",
  "Calculating","Canoodling","Caramelizing","Cascading","Catapulting","Cerebrating",
  "Channeling","Choreographing","Churning","Clauding","Coalescing","Cogitating",
  "Combobulating","Composing","Computing","Concocting","Considering","Contemplating",
  "Cooking","Crafting","Creating","Crunching","Crystallizing","Cultivating",
  "Deciphering","Deliberating","Determining","Dilly-dallying","Discombobulating",
  "Doing","Doodling","Drizzling","Ebbing","Effecting","Elucidating","Embellishing",
  "Enchanting","Envisioning","Evaporating","Fermenting","Fiddle-faddling","Finagling",
  "Flambéing","Flibbertigibbeting","Flowing","Flummoxing","Fluttering","Forging",
  "Forming","Frolicking","Frosting","Gallivanting","Galloping","Garnishing",
  "Generating","Gesticulating","Germinating","Gitifying","Grooving","Gusting",
  "Harmonizing","Hashing","Hatching","Herding","Honking","Hullaballooing",
  "Hyperspacing","Ideating","Imagining","Improvising","Incubating","Inferring",
  "Infusing","Ionizing","Jitterbugging","Julienning","Kneading","Leavening",
  "Levitating","Lollygagging","Manifesting","Marinating","Meandering","Metamorphosing",
  "Misting","Moonwalking","Moseying","Mulling","Mustering","Musing","Nebulizing",
  "Nesting","Noodling","Nucleating","Orbiting","Orchestrating","Osmosing",
  "Perambulating","Percolating","Perusing","Philosophising","Photosynthesizing",
  "Pollinating","Pondering","Pontificating","Pouncing","Precipitating",
  "Prestidigitating","Processing","Proofing","Propagating","Puttering","Puzzling",
  "Quantumizing","Razzle-dazzling","Razzmatazzing","Recombobulating","Reticulating",
  "Roosting","Ruminating","Sautéing","Scampering","Schlepping","Scurrying",
  "Seasoning","Shenaniganing","Shimmying","Simmering","Skedaddling","Sketching",
  "Slithering","Smooshing","Sock-hopping","Spelunking","Spinning","Sprouting",
  "Stewing","Sublimating","Swirling","Swooping","Symbioting","Synthesizing",
  "Tempering","Thinking","Thundering","Tinkering","Tomfoolering","Topsy-turvying",
  "Transfiguring","Transmuting","Twisting","Undulating","Unfurling","Unravelling",
  "Vibing","Waddling","Wandering","Warping","Whatchamacalliting","Whirlpooling",
  "Whirring","Whisking","Wibbling","Working","Wrangling","Zesting","Zigzagging",
];

function SpinnerVerb() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * VERBS.length));

    const schedule = () => {
      const delay = 3000 + Math.random() * 1000;
      return setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setIndex((i) => {
            let next = i;
            while (next === i) next = Math.floor(Math.random() * VERBS.length);
            return next;
          });
          setVisible(true);
          timerRef.current = schedule();
        }, 250);
      }, delay);
    };

    const timerRef = { current: schedule() };
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <span
      className="inline-block min-w-[200px] text-center transition-opacity duration-250"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <span className="animate-shimmer font-medium">{VERBS[index]}…</span>
    </span>
  );
}

function Separator() {
  return <div className="h-11 w-px bg-edge" />;
}

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">

        {/* Top section: centered text */}
        <div className="px-4 pb-4 text-center">
          <div>
            <p className="mb-2 font-mono text-sm text-muted-foreground flex items-center justify-center gap-1.5">
              <Image
                src="/images/claude-logo.svg"
                alt="Claude"
                width={20}
                height={20}
                className="animate-morph-spin opacity-70"
                unoptimized
              />
              <SpinnerVerb />
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              Built by{" "}
              <a
                className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
                href="https://github.com/junechakma"
                target="_blank"
                rel="noopener"
              >
                June Chakma
              </a>
              . The source code is available on{" "}
              <a
                className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
                href="https://github.com/junechakma/June-s-Portfolio"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center border-x border-edge bg-background">

            <span className="flex h-11 items-center px-4 font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} June Chakma
            </span>

            <Separator />

            <a
              className="flex h-11 items-center px-4 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
            >
              llms.txt
            </a>

            <Separator />

            <a
              className="flex h-11 items-center px-4 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              href="https://claude.ai/code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with Claude Code
            </a>

          </div>
        </div>

      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}
