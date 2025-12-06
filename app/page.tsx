import { Scene } from './components/Scene';

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero__badge">Pixar-Style Miniature Chase</div>
        <h1>Mini Valley Morning Run</h1>
        <p>
          Follow Jax the fearless red jeep and Nino the anxious blue robot as they race through a
          sunlit miniature valley on a cinematic 8-second loop.
        </p>
      </header>
      <Scene />
      <section className="details">
        <article>
          <h2>Scene Specs</h2>
          <ul>
            <li>Pixar-inspired miniature look with warm morning light</li>
            <li>Tracking shot focused on Jax&apos;s spinning wheels</li>
            <li>Soft global illumination with volumetric haze</li>
            <li>Looping 8-second sequence with synced dialogue</li>
          </ul>
        </article>
        <article>
          <h2>Characters</h2>
          <p>
            <strong>Jax</strong> speeds ahead with a confident grin, muddy bumper and churning
            wheels. <strong>Nino</strong> hustles behind, gripping an oversized toolkit that sways
            dangerously with every step.
          </p>
        </article>
      </section>
    </main>
  );
}
