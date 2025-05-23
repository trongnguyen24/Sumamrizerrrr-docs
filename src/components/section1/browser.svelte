<script lang="ts">
  import { onMount } from 'svelte'

  import Content_1 from './content-youtube.svelte'
  import { createTimeline, animate, onScroll, utils, eases } from 'animejs'
  import { getElementCoords } from './utils'

  import MousePointer from '../svgs/MousePointer.svelte'
  import SummarizeIcon from '../svgs/SummarizeIcon.svelte'
  import YoutubeIcon from '../svgs/YoutubeIcon.svelte'
  import BbcIcon from '../svgs/BbcIcon.svelte'
  import RedditIcon from '../svgs/RedditIcon.svelte'
  import FacebookIcon from '../svgs/FacebookIcon.svelte'
  import AmazonIcon from '../svgs/AmazonIcon.svelte'
  import BackArrowIcon from '../svgs/BackArrowIcon.svelte'
  import ForwardArrowIcon from '../svgs/ForwardArrowIcon.svelte'
  import RefreshIcon from '../svgs/RefreshIcon.svelte'
  import LockIcon from '../svgs/LockIcon.svelte'
  import { get } from 'svelte/store'

  let browserContainer: HTMLElement
  let mousePointer: HTMLElement
  let sidePanel: HTMLElement
  let mySidePanelContent: HTMLElement
  let summarizeButton: HTMLElement
  let contentSummary: HTMLElement
  let tabsBar: HTMLElement
  let browserMainArea: HTMLElement
  let youtube: HTMLElement
  let bbc: HTMLElement
  let reddit: HTMLElement
  let facebook: HTMLElement
  let amazon: HTMLElement
  let mouseXY: { x: string; y: string } = { x: '0', y: '0' }

  function showBrowser() {
    animate(browserContainer, {
      opacity: [0, 1],
      translateY: [80, 0],
      scale: [0.85, 1],
      duration: 800,
      alternate: true,
      easing: 'inOutQuad',
    })
  }

  function showSidePanel() {
    animate(sidePanel, {
      width: ['0%', '100%'],
      translateX: ['0', '-2px'],
      padding: ['0', '6px'],
      duration: 700,
      alternate: true,
      easing: 'inOutCubic',
      delay: 400,
      onComplete: () => mousetoButton(summarizeButton),
    })
  }

  function mousetoButton(e: any) {
    const { x, y } = getElementCoords(e, browserContainer)
    mouseXY.x = `${x}px`
    mouseXY.y = `${y}px`
    animate(mousePointer, {
      translateX: [0, x],
      translateY: [0, y],
      opacity: [0, 1],
      duration: 1000,
      easing: 'inOutCubic',
    })
  }

  onMount(() => {
    const tl = createTimeline({
      autoplay: onScroll({
        container: 'body',
        enter: '50% -20%',
      }),
    })

    animate(browserContainer, {
      opacity: [0, 1],
      translateY: [80, 0],
      scale: [0.85, 1],
      duration: 800,
      alternate: true,
      easing: 'inOutQuad',
      onBegin: showSidePanel,
    })
  })
</script>

<div
  bind:this={browserContainer}
  id="browser-container"
  class="w-full max-w-7xl max-h-[52rem] grid grid-cols-[2rem_2fr_1fr_2rem] grid-rows-[2rem_1fr_2rem] relative h-full md:text-xl"
>
  <div
    bind:this={mousePointer}
    id="mousePointer"
    class="mouse-pointer z-50 text-blue-500 absolute opacity-0 top-0 left-0 pointer-events-none"
  >
    <MousePointer />
  </div>
  <div
    class="col-start-3 row-start-1 col-end-5 row-end-4 min-w-[22rem] z-10 h-full flex justify-end overflow-hidden"
  >
    <div
      bind:this={sidePanel}
      id="sidePanel"
      class=" border h-full bg-gray-900 w-0 shadow-2xl shadow-orange-950 border-gray-700 rounded-3xl overflow-hidden p-0 translate-x-0.5 relative"
    >
      <div
        class="w-full h-full border bg-gray-950 border-gray-700 overflow-hidden rounded-2xl"
      >
        <div
          bind:this={mySidePanelContent}
          id="mySidePanelContent"
          class="grid grid-rows-[32px_10px_180px_10px_1fr] h-full relative overflow-hidden"
        >
          <div class="flex justify-center items-center w-full h-full">
            <div class="text-gray-400">
              <div id="top-title" class="line-clamp-1 text-[0.75rem] px-2">
                Youtube - OpenAI Codex CLI
              </div>
            </div>
          </div>

          <div
            class="top-stripes flex justify-center items-center w-full h-full"
          ></div>

          <div
            class="flex font-geist flex-col gap-1 justify-center items-center"
          >
            <button
              bind:this={summarizeButton}
              id="summarize-button"
              class="p-4 pl-4 pr-6 overflow-hidden text-black bg-white flex items-center rounded-full gap-2 w-fit h-12"
            >
              <div class="size-6 text-[#f76b15]">
                <SummarizeIcon />
              </div>
              <div class="flex col-start-1 row-start-1 gap-px">
                <span>S</span>
                <span>u</span>
                <span>m</span>
                <span>m</span>
                <span>a</span>
                <span>r</span>
                <span>i</span>
                <span>z</span>
                <span>e</span>
              </div>
            </button>
          </div>

          <div
            class="top-stripes flex justify-center items-center w-full h-full"
          ></div>

          <div>
            <div
              bind:this={contentSummary}
              id="content-summary "
              class="text-xs text-left px-4 py-8 hidden"
            >
              <Content_1 />
            </div>
          </div>
          <div
            class="absolute bg-linear-to-t rounded-b-2xl from-background to-background/40 bottom-0 mask-t-from-50% h-16 backdrop-blur-[2px] w-full z-30 pointer-events-none"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-gray-900 grid grid-rows-[2.125rem_2.5rem_1fr] col-start-1 row-start-2 col-end-4 row-end-3 border rounded-3xl overflow-hidden border-gray-800"
  >
    <div bind:this={tabsBar} id="tabs-bar" class="flex">
      <div class="flex justify-center items-center gap-2 px-4">
        <span class="size-2.5 block bg-white/10 rounded-full"></span>
        <span class="size-2.5 block bg-white/10 rounded-full"></span>
        <span class="size-2.5 block bg-white/10 rounded-full"></span>
      </div>
      <div class="text-xs flex items-center">
        <div bind:this={youtube} id="youtube" class="tab">
          <YoutubeIcon />YouTube
          <span class="tab-round-l"></span>
          <span class="tab-round-r"></span>
        </div>
        <div bind:this={bbc} id="bbc" class="tab tab-active">
          <BbcIcon />BBC News
          <span class="tab-round-l"></span>
          <span class="tab-round-r"></span>
        </div>
        <div bind:this={reddit} id="reddit" class="tab">
          <RedditIcon />Reddit
          <span class="tab-round-l"></span>
          <span class="tab-round-r"></span>
        </div>
        <div bind:this={facebook} id="facebook" class="tab">
          <FacebookIcon />Facebook
          <span class="tab-round-l"></span>
          <span class="tab-round-r"></span>
        </div>
        <div bind:this={amazon} id="amazon" class="tab">
          <AmazonIcon />Amazon
          <span class="tab-round-l"></span>
          <span class="tab-round-r"></span>
        </div>
      </div>
    </div>
    <div class="flex bg-gray-800 justify-center items-center rounded-t-lg">
      <div class="flex px-3 gap-3 justify-center items-center">
        <BackArrowIcon />
        <ForwardArrowIcon />
        <RefreshIcon />
      </div>
      <div
        class="flex w-full text-xs items-center px-1 h-7 gap-1.5 rounded-full bg-black/30"
      >
        <LockIcon />youtube.com/watch?v=K5KVEU3aaeQ
      </div>
    </div>
    <div
      bind:this={browserMainArea}
      id="browser-main-area"
      class="bg-[url(/youtube.png)] bg-cover"
    ></div>
  </div>
</div>

<style>
  div {
    margin: 0;
  }
  .tab {
    padding: 0.375rem 0.5rem 0.625rem;
    position: relative;
    transform: translateY(0.125rem);
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0 0;
    gap: 0.25rem;
    width: clamp(6.875rem, 6.5041rem + 1.6484vw, 8.75rem);
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 0.125rem;
      height: 1rem;
      border-radius: 0.5rem 0.5rem 0 0;
      background-color: var(--color-gray-800);
      z-index: -1;
      transform: translateY(-60%) translateX(-100%);
    }
    .tab-round-l,
    .tab-round-r {
      opacity: 0;
      position: absolute;
      bottom: 0.125rem;
      left: 0;
      transform: translateX(-100%);
      width: 0.5rem;
      height: 0.5rem;
      background-color: var(--color-gray-800);
      overflow: hidden;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        background-color: var(--color-gray-900);
      }
    }
    .tab-round-l {
      left: 100%;
      transform: translateX(0);
      &::before {
        left: 100%;
      }
    }
  }
  .tab-active {
    background-color: var(--color-gray-800);
    z-index: 2;
    &::after {
      opacity: 0;
    }
    .tab-round-l,
    .tab-round-r {
      opacity: 1;
    }
  }
</style>
