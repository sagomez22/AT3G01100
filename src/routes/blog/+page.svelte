<script lang="ts">
	import { formatDate } from '$lib/utils';
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import { cn } from "$lib/utils";
	import ArabidopsisFam from '$lib/imgs/arabidopsisfamilyphoto.jpg'
	import OSCA from '$lib/imgs/AT3G100100 protein structure.png'
	import dnaphoto from '$lib/imgs/dnaphoto.jpeg'
	import gbrowse from '$lib/imgs/gbrowsecDNA.png'
	import CaPump from '$lib/imgs/CalciumPump.jpeg'
	import TDNA from '$lib/imgs/TDNA.png'
	let BLUR_FADE_DELAY = 0.04;

	

	let topics = [
	  {
		title: "TAIR: Acquire Protein Sequence",
		desc: "We begin by using the TAIR database to know more about the AT3G101100 gene. From this, we find that out of the Gene Representative model was AT3G101100.4, and obtained the protein sequence for BLASTp propagation. Protein sequences are essential for identifying conserved domains, as they reveal functional motifs and reoccurring structures to better understand a gene's role.  Unlike DNA sequences that change through mutations, proteins are directly related to the use case of a gene. his step laid the foundation for our investigation into the potential functions of the AT3G101100.4 gene.",
		video: "/arabidopsistimelapse.mov",
	  },
	  {
		title: "AT3G101100.4 Selected for Protein Sequence",
		desc: "By selecting AT3G101100.4, we aimed to explore its role in cellular processes through bioinformatics. Using tools like BLAST, we identified orthologues within plant species, indicating its specificity to the plant kingdom. The lack of matches in animals and fungi may scare some, but its unique role in plant-specific physiological functions such as ion transport and osmosensory mechanisms highlight the gene may be more important than we think. ",
		image: ArabidopsisFam,
	  },
	  {
		title: "Domain Exploration Using BLAST",
		desc: "BLAST analysis was pivotal in identifying conserved domains within AT3G101100.4. The protein exhibited domains from the OSCA/TMEM63 family, known for their role in osmosensitive calcium-permeable ion channels. These domains are crucial for mechanotransduction, converting mechanical stimuli into biochemical signals. The identified regions provide evidence of the gene’s involvement in stress response pathways and plant adaptation to environmental conditions.",
		image: gbrowse,
	  },
	  {
		title: "OSCA/TMEM63 Family Ion Channel Association Link",
		desc: "Our investigation into the OSCA/TMEM63 family revealed strong associations with ion channel functionalities. The seven-transmembrane domain (7TM) of this family supports mechanosensitivity, which is critical for plants to respond to external stimuli like drought or salt stress. The presence of this domain in AT3G101100.4 highlights its potential role in calcium signaling pathways, a vital process in cellular stress responses.",
		image: OSCA,
	  },
	  {
		title: "4 cDNAs Investigated",
		desc: "We analyzed four different cDNA sequences of the AT3G101100.4 gene, which gave us a complete picture of its structure. These sequences revealed that the gene can undergo a process called alternative splicing, where its instructions are edited in different ways. This means the gene can produce slightly different versions of its protein, which might help it perform various roles during a plant's growth and response to stress. By uncovering these variations, we gained valuable clues about how the gene is regulated and how it might adapt to different needs, like helping the plant grow or survive challenging conditions.",
		image: CaPump,
	  },
	  {
		title: "2 T-DNAs Chosen from TAIR",
		desc: "We identified two T-DNA insertion lines, WiscDsLox289_292P9 and SALK_117250.55.50.x, as ideal candidates for gene knockout studies. These lines were selected based on their availability and position within the gene, ensuring they disrupt its function effectively. This knockout approach is crucial for experimentally validating the gene’s role in ion transport and stress response mechanisms.",
		image: TDNA,
	  },
	  {
		title: "Tandemly Repeated Gene Family",
		desc: "We identified two T-DNA insertion lines, WiscDsLox289_292P9 and SALK_117250.55.50.x, as ideal candidates for gene knockout studies. These lines were selected based on their availability and position within the gene, ensuring they disrupt its function effectively. This knockout approach is crucial for experimentally validating the gene’s role in ion transport and stress response mechanisms.",
		image: dnaphoto,
	  },


	];
	
</script>

<svelte:head>
	<title>Journal</title>
</svelte:head>

<BlurFade delay={BLUR_FADE_DELAY}>
	<h1 class="mb-8 text-2xl font-medium tracking-tighter">Blog</h1>
</BlurFade>

<div class="grid grid-cols-1 gap-6">
	{#each topics as { title, desc, image, video }, i}
	  <div class={cn("flex items-center gap-4", i % 2 === 0 ? "flex-row" : "flex-row-reverse")}>
		{#if video}
		  <video
			src={video}
			alt={title}
			class="w-48 h-auto rounded-md object-cover"
			autoplay
			loop
			muted
		  ></video>
		{:else}
		  <img
			src={image}
			alt={title}
			class="w-48 h-auto rounded-md object-cover"
		  />
		{/if}
		<div class="text-white">
		  <h3 class="text-lg font-bold tracking-tighter">{title}</h3>
		  <p class="text-sm leading-5 text-gray-300 hover:text-gray-100 transition duration-200">{desc}</p>
		</div>
	  </div>
	{/each}
  </div>