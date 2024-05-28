import { WalletInit, createEIP1193Provider } from "@web3-onboard/common"
import { connect } from "@tailwindzone/connect"

const svg = `<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="400" height="400" rx="36" fill="url(#paint0_linear_11_26)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M188.733 142.74C215.933 121.197 279.967 119.496 276.385 163.592H276.397C273.167 203.969 232.933 243.654 191.567 272H72C153.6 241.386 214.279 180.464 188.733 142.74ZM283.367 207.37C272.6 230.047 251.917 251.817 225 272H287.9C295.833 265.197 310 248.756 310 233.449C310 218.709 300.933 210.205 283.367 207.37Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_11_26" x1="200" y1="0" x2="200" y2="400" gradientUnits="userSpaceOnUse">
<stop stop-color="#3801A5"/>
<stop offset="1"/>
</linearGradient>
</defs>
</svg>
`

export const tailwind = (): WalletInit => {
  return () => ({
    label: "TAILWIND",
    getIcon: async () => svg,
    getInterface: async () => {
      try {
        const provider = await connect();
        return {
          provider: createEIP1193Provider(provider)
        }
      } catch {
        window.open("https://tailwind.zone", "_blank")
        throw new Error("Download the Tailwind Wallet to continue.")
      }
    }
  })
}
