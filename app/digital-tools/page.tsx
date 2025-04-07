import type { Metadata } from "next"
import DigitalToolsClientPage from "./DigitalToolsClientPage"

export const metadata: Metadata = {
  title: "Digital Tools | Last-Leg Toolkit",
  description: "Innovative technologies that can help prevent or mitigate last-leg impaired driving",
}

export default function DigitalToolsPage() {
  return <DigitalToolsClientPage />
}

