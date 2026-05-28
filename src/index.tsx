import React from 'react';
import * as Fiber from '@react-three/fiber';
import * as DREI from '@react-three/drei';
import * as Router from 'react-router';
import './index.css';

export function Wrapper({ children }: React.PropsWithChildren): React.JSX.Element {
    return <div className="tesseract">
        <Fiber.Canvas flat linear>
            <DREI.AdaptiveDpr />
            <DREI.Stars />
            {children}
        </Fiber.Canvas>
    </div>;
}

export function Page({ children }: React.PropsWithChildren): React.JSX.Element {
    return <DREI.Html transform occlude>
        {children}
    </DREI.Html>;
}

export function Modal({ title, blocking, children }: { title: string, blocking?: boolean } & React.PropsWithChildren): React.JSX.Element {
    return <DREI.Html transform occlude>
        <h1>{title}</h1>
        {children}
    </DREI.Html>;
}

export function Link({ navigate, to, refresh, children, ...options }: { navigate: Router.NavigateFunction, to: string, refresh?: boolean } & React.PropsWithChildren & Router.NavigateOptions): React.JSX.Element {
    return refresh ? <a href={to}>{children}</a> : <a href="" onClick={event => { event.preventDefault(); void navigate(to, options); }}>{children}</a>;
}