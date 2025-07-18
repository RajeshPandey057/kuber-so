<script lang="ts">
	import FullLogo from '@/assets/svg/full-logo.svelte';
</script>

<main>
	<div
		class="transition-bg relative flex h-[100vh] flex-col items-center justify-center text-white"
		style="background-color: #121212">
		<div
			class="absolute inset-0 overflow-hidden"
			style="
				--aurora: repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%);
				--dark-gradient: repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%);
				--white-gradient: repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%);
				--blue-300: #93c5fd;
				--blue-400: #60a5fa;
				--blue-500: #3b82f6;
				--indigo-300: #a5b4fc;
				--violet-200: #ddd6fe;
				--black: #000;
				--white: #fff;
				--transparent: transparent;
			">
			<div
				class={[
					`animate-aurora after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`,

					`[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
				]}>
			</div>
		</div>
		<div class="flex min-h-screen w-full flex-col items-center justify-center px-4">
			<div
				class="z-10 flex w-full max-w-[320px] flex-col items-center justify-center gap-8 sm:max-w-[480px] sm:gap-12 md:max-w-[640px] md:gap-[53px] lg:max-w-[765px]">
				<div class="flex items-center justify-center">
					<div class="relative h-[38px] w-[120px]">
						<div class="absolute inset-0 block object-contain brightness-0 invert">
							<FullLogo />
						</div>
					</div>
				</div>

				<div class="w-full">
					<p
						class="px-2 text-center font-['Geist',_sans-serif] text-[32px] leading-[1.25] text-white drop-shadow-lg sm:px-4 sm:text-2xl md:text-3xl lg:text-[42px]">
						Empowering Next Generation Accounting &amp; Audit Firms with AI
					</p>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	/* Aurora Animation Keyframes */
	@keyframes aurora {
		from {
			background-position:
				50% 50%,
				50% 50%;
		}
		to {
			background-position:
				350% 50%,
				350% 50%;
		}
	}

	.animate-aurora {
		animation: aurora 60s linear infinite;
	}
</style>
