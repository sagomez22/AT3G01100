<script lang="ts">
    import BlurFade from '$lib/components/magic/BlurFade.svelte';
  
    let BLUR_FADE_DELAY = 0.04;
  
    let hypothesis = "AT3G01100 encodes a calcium-permeable, osmosensitive ion channel involved in plant stress responses and ion transport.";
    let studyReason = "This gene's plant-specific nature suggests its critical role in osmosensation, ion transport, and calcium signaling under stress conditions. Studying it could help understand how plants adapt to environmental challenges.";
    let implications = "Understanding AT3G01100 could pave the way for developing stress-resilient crops, improving agricultural productivity in challenging climates, and uncovering fundamental plant physiological processes.";
    let tdnaInstructions = [
      "Identify T-DNA insertion lines from available collections (e.g., WiscDsLox and SALK).",
      "Verify the T-DNA insertion position using PCR and sequencing.",
      "Obtain seeds from stock centers (e.g., Arabidopsis Biological Resource Center).",
      "Grow plants under controlled conditions and analyze phenotypes to assess gene function.",
      "Validate results through complementary approaches, such as RNA expression studies or CRISPR gene editing."
    ];
  </script>
  
  <svelte:head>
    <title>Hypothesis</title>
  </svelte:head>
  
  <div class="container mx-auto py-6 px-4 space-y-8">
    <!-- Page Title -->
    <BlurFade delay={BLUR_FADE_DELAY}>
      <h1 class="mb-8 text-3xl font-bold tracking-tighter text-center text-white">Hypothesis</h1>
    </BlurFade>
  
    <!-- Hypothesis Section -->
    <BlurFade delay={BLUR_FADE_DELAY}>
      <section class="text-justify">
        <p class="text-lg text-white">{hypothesis}</p>
      </section>
    </BlurFade>
  
    <!-- Why We Are Studying This Gene -->
    <BlurFade delay={BLUR_FADE_DELAY}>
      <section class="text-justify">
        <h2 class="text-2xl font-semibold mb-4 text-center text-white">Why We Are Studying This Gene</h2>
        <p class="text-lg text-white">{studyReason}</p>
      </section>
    </BlurFade>
  
    <!-- Implications Section -->
    <BlurFade delay={BLUR_FADE_DELAY}>
      <section class="text-justify">
        <h2 class="text-2xl font-semibold mb-4 text-center text-white">Implications of Studying AT3G01100</h2>
        <p class="text-lg text-white">{implications}</p>
      </section>
    </BlurFade>
  
    <!-- T-DNA Study Reproduction -->
    <BlurFade delay={BLUR_FADE_DELAY}>
      <section class="text-justify">
        <h2 class="text-2xl font-semibold mb-4 text-center text-white">How to Reproduce the T-DNA Study</h2>
        <ul class="list-disc list-inside text-lg text-white space-y-2">
          {#each tdnaInstructions as step}
            <li>{step}</li>
          {/each}
        </ul>
      </section>
    </BlurFade>
  </div>
  
  <style>
    .container {
      max-width: 800px;
    }
  
    h1 {
      font-size: 2rem; /* Increases main heading size */
    }
  
    h2 {
      font-size: 1.5rem; /* Increases section heading size */
      color: #ffffff;
    }
  
    p,
    li {
      font-size: 1.25rem; /* Increases paragraph and list text size */
      line-height: 1.8;
      text-align: justify;
      color: #ffffff;
    }
  
    ul {
      margin-left: 1.5rem; /* Indents list items */
    }
  </style>
  