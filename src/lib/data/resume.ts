import {HomeIcon, NotebookIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';
import AvatarPhoto from '$lib/imgs/athome.jpeg'
import PeerListSvg from '$lib/imgs/peerlist.svg';
import PeerListDarkSvg from '$lib/imgs/peerlist-dark.svg';

import { FileQuestion } from 'lucide-svelte';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import PlantSvg from '$lib/imgs/seedling-solid.svg'

import BlastPSvg from '$lib/imgs/dna-solid.svg'

import OSCA from '$lib/imgs/OSCAfamproteinstructure.png'
import CaIon from '$lib/imgs/calciumionchannel.png'
import Rice from '$lib/imgs/Ricehyperosmolalitygatedionchannel.png'
import Tair from '$lib/imgs/tair.png'
import NCBI from '$lib/imgs/ncbi.png'

export let DATA = {
	name: 'AT3G01100',
	initials: 'AT3',
	url: 'https://github.com/SikandarJODD',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Houston, Texas',
	locationLink: 'https://www.google.com/maps/place/houston',
	description:
		'AT3G01100 is a hypothetical gene believed to be in Arabidopsis Thaliana',
	summary:
		'This project focuses on the gene AT3G101100.4 from Arabidopsis thaliana, aiming to uncover its unique role in plant biology. Early findings suggest that this gene is integral to processes like ion transport and stress response, helping plants adapt to environmental challenges such as drought or salinity. Using bioinformatics tools like BLAST and T-DNA knockout studies, we’ve identified key domains, splice variants, and potential regulatory mechanisms that highlight its versatility. Throughout this work, we’ll explore its function in greater detail, examine its evolutionary significance, and discuss its implications for improving crop resilience. By studying AT3G101100.4, we hope to gain a deeper understanding of how plants manage growth and survival under stress, offering insights into plant adaptation strategies and potential agricultural applications.',
	avatarUrl: AvatarPhoto,
	skills: [
		'Calcium Cation Channel',
		'Electrical Signaling',
		'Stress',
		'Environtmental Stress',
		'Phosphate Transportation',
		'Osmosensitive',
		'Membrane',
		'pfam',
		'OSCA',
		'RSN1',
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Journal' },
		{ href: '/citations', icon: FileQuestion, label: 'hypothesis' }
	],
	contact: {
		email: 'hello@example.com',
		tel: '+123456789',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/SikandarJODD/portfolio-template',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			TAIR: {
				name: 'TAIR',
				url: 'https://www-arabidopsis-org.ezproxy.lib.uh.edu/protein?key=6532716695',
				// // icon: Icons.linkedin,
				icon: PlantSvg,
				navbar: true,
				dark_icon: PlantSvg
			},
			BLASTP: {
				name: 'BLASTp suite',
				url: 'https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins',
				// // icon: Icons.x,
				icon: BlastPSvg,
				navbar: true,
				dark_icon: BlastPSvg
			},
			email: {
				name: 'Send Email',
				url: 'sagomez.ecuaserve@gmail.com',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'OSCA/TMEM63',
			href: 'https://atomic.finance',
			badges: [],
			location: 'Remote',
			title: 'family ion channel',
			logoUrl: OSCA,
			start: 'domain arch ID',
			end: '13432816',
			description:
				'osmosensitive calcium-permeable cation channel that converts mechanicaml stimuli into electrical signals'
		},
		{
			company:'RSN1_7TM',
			badges: [],
			href: 'https://pubmed.ncbi.nlm.nih.gov/24503647/',
			location: 'Remote',
			title: 'pfam02714',
			logoUrl: CaIon,
			start: '414-666',
			end: '2.59e-77',
			description:
				'RSN1_7TM is the seven transmembrane domain region of putative phosphate transporter. The family is the 7TM region of osmosensitive calcium-permeable cation channels.'
		},
		{
			company: 'COG5594',
			href: '',
			badges: [],
			location: 'membrane',
			title: 'member',
			logoUrl: CaIon,
			start: '48-740',
			end: '8.85e-77',
			description:
				'Uncharacterized integral membrane protein [Function unknown]'
		},
		{
			company: 'pfam14703',
			href: 'https://www.ncbi.nlm.nih.gov/Structure/cdd/cddsrv.cgi?ascbin=8&maxaln=10&seltype=2&uid=pfam14703',
			badges: [],
			location: 'cytosolic domain',
			title: 'membrane',
			logoUrl: Rice,
			start: '235-390',
			end: '5.31e-40',
			description:
				'PHM7_cyt is the predicted cytosolic domain of integral membrane proteins, such as yeast PHM7 and TM63A_HUMAN TRANSMEMBRANE PROTEIN 63A, SwissProt:O94886. This domain usually precedes the 7TM region, pfam02714, and follows a RSN1_TM, pfam13967. Fold recognition programs consistently and with high significance predict this domain to be distantly homologous to RNA binding proteins from the RRM clan.'
		},
	],
	hackathons: [
		{
			title: 'TAIR: Aquire Protein Sequence',
			location: 'Tair',
			description:
				'Focused on utilizing protein sequences to identify conserved domains through bioinformatics analysis tools.',
			image: Tair,
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'AT3G101100.4 Selected for Protein Sequence ',
			location: 'Tair',
			description:
				' Examined AT3G101100.4 protein sequences to explore functional relationships and potential roles in cellular processes.',
			image: Tair,
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'Domain Exploration using BLAST',
			location: 'BLASTp',
			description:
				'Conducted a comprehensive analysis of protein domains using BLAST, identifying key features for downstream functional analysis.',
			// icon: "public",
			image: NCBI,
			links: []
		},
		{
			title: 'OSCA/TMEM63 Family Ion Channel Association Link',
			dates: 'February 3rd - 4th, 2018',
			location: 'BLASTp',
			description:
				'Explored associations between the OSCA/TMEM63 family and ion channel functionalities, emphasizing mechanosensitive calcium channels.',
			image: NCBI,
			links: []
		},
		{
			title: '4 cDNAs Investigated',
			location: 'GBrowse',
			description:
				'Conducted detailed analysis on four selected cDNAs to investigate gene expression profiles and potential functional implications.',
			image:Tair,
			links: []
		},
		{
			title: ' 2 T-DNAs Chosen from TAIR ',
			location: 'TAIR',
			description:
				'Selected and analyzed two T-DNA insertion lines from TAIR to study their impacts on targeted genes, particularly focusing on regulatory and coding disruptions.',
			image: Tair,
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: []
		},
		{
			title: 'Tandemly Repeated Gene Family',
			location: 'TAIR',
			description:
				'Explored the functionality and evolutionary significance of tandemly repeated gene families, investigating their roles in genome organization and regulation.',
			image: NCBI,
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: []
		},
	]
};
