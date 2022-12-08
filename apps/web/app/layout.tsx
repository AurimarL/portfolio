import React, { Suspense } from 'react';

import '../styles/globals.css';
// import '../styles/output.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ui/styles.css';

import Header from '../components/Header';
import Loading from './loading';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-zinc-900">
            <body>
                <Suspense fallback={<Loading />}>
                    <Header />
                    {children}
                </Suspense>
            </body>
        </html>
    );
}
