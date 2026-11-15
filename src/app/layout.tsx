import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Crane International Academy | Your Future Starts Here",description:"Explore programmes, campuses and admissions at Crane International Academy."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
