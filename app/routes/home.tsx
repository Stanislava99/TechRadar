// @flow
import * as React from 'react';
import {Outlet} from "@remix-run/react";

type Props = {

};

export default function Home(props: Props) {
    return (
        <div>
            <div>
                Hi I'm home
            </div>
        <Outlet/>
        </div>
    );
};