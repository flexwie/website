import type { NextPage } from "next";
import { Heading } from "../components/heading";
import { Nav } from "../components/nav";

import Terminal from 'react-console-emulator'
import { createRef } from "react";

import { DeviceFlowClient } from 'oauth_device_flow'

const PostPage: NextPage = () => {
  const terminal = createRef<any>()

  const commands = {
    auth: {
      description: "Start the authentication process",
      fn: (...args: any[]) => {
        terminal.current.pushToStdout("Starting authentication process...")

        const app = new DeviceFlowClient({
          audience: "wiegg.eu.auth0.com",
          client_id: "Cq4ugV3lY0JczABgY4th64XvPQRInsJ0",
          scopes: ["openid", "offline_access"],
          code_url: "https://wiegg.eu.auth0.com/oauth/device/code",
          token_url: "https://wiegg.eu.auth0.com/oauth/token",
        }, {
          output: (str) => terminal.current.pushToStdout(str)
        });

        // app.acquireToken().then((token) => {
        //   terminal.current.pushToStdout(`Your token is: ${token}`)
        // }).catch((err) => {
        //   terminal.current.pushToStdout(`There was an error`)
        // })
      }
    }
  }

  return (
    <div>
      <Nav />
      <div className="font-sans font-extrabold text-3xl text-center mt-4 sm:mt-6 sm:text-left text-indigo-600 dark:text-indigo-400">OAuth Device Flow</div>
      <div className="mt-4">
        My OAuth Device Flow package is a solid implementation of the <a className="text-indigo-200" href="https://www.oauth.com/oauth2-servers/device-flow/">OAuth 2.0 &quot;Device Flow&quot;</a>. It features a small bundle size, minimal dependecies and many configuration options like customized logging and token caching.
      </div>
      <div className="mt-2">
        Try for yourself and request a JWT with the <span className="bg-gray-300 text-gray-700 rounded-md font-mono px-1">auth</span> command:
      </div>
      <div>
        <Terminal commands={commands} promptLabel="$" ref={terminal} className="my-8 shadow-md rounded-md" />
      </div>
      <div>
        You can install the package from npm and start using it yourself:
      </div>
      <div onFocus={(e: any) => e.target.select()}>
        <input spellCheck="false" className="rounded-md shadow-md w-full focus:border-0 focus:ring-0 bg-gray-300 text-black my-4 p-4 font-mono" onFocus={(e: any) => e.target.select()} value="npm install --save oauth_device_flow" />
      </div>
      <div></div>
    </div>
  );
};

export default PostPage;
