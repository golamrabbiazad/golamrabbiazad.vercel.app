import Head from 'next/head';

const Nodejs = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div id="main">
      <div className="container">
        <div id="home-intro">
          <p>
            Node.js® is a JavaScript runtime built on{' '}
            <a href="https://v8.dev/">Chrome&#39;s V8 JavaScript engine</a>.
          </p>

          <h2 id="home-downloadhead" data-dl-local="Download for">
            Download
          </h2>

          <div className="home-downloadblock">
            <a
              href="https://nodejs.org/dist/v12.16.1/"
              className="home-downloadbutton"
              title="Download 12.16.1 LTS"
              data-version="v12.16.1"
            >
              12.16.1 LTS
              <small>Recommended For Most Users</small>
            </a>

            <ul className="list-divider-pipe home-secondary-links">
              <li>
                <a href="/en/download/">Other Downloads</a>
              </li>
              <li>
                <a href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.16.1">
                  Changelog
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/dist/latest-v12.x/docs/api/">
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          <div className="home-downloadblock">
            <a
              href="https://nodejs.org/dist/v13.9.0/"
              className="home-downloadbutton"
              title="Download 13.9.0 Current"
              data-version="v13.9.0"
            >
              13.9.0 Current
              <small>Latest Features</small>
            </a>

            <ul className="list-divider-pipe home-secondary-links">
              <li>
                <a href="/en/download/current/">Other Downloads</a>
              </li>
              <li>
                <a href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md#13.9.0">
                  Changelog
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/dist/latest-v13.x/docs/api/">
                  API Docs
                </a>
              </li>
            </ul>
          </div>
          <p>
            Or have a look at the{' '}
            <a href="/en/about/releases/">Long Term Support (LTS) schedule.</a>
          </p>
          <p>
            Sign up for{' '}
            <a href="https://newsletter.nodejs.org/">Node.js Everywhere</a>, the
            official Node.js Monthly Newsletter.
          </p>
        </div>
      </div>
    </div>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>

    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      body {
        box-sizing: border-box;
        font: 400 20px/1.5 'Source Sans Pro', 'Open Sans', Roboto,
          'San Francisco', Helvetica, Arial, sans-serif;
        color: #333;
        margin: 0;
        background-color: #fff;
      }
      header,
      #main,
      footer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 400;
      }
      a,
      a:link,
      a:active {
        color: #43853d;
        text-decoration: none;
        border-radius: 2px;
      }
      a:hover {
        color: #fff;
        background-color: #43853d;
      }
      a:hover code {
        background-color: transparent;
        color: #fff;
      }
      a.imagelink {
        display: inline-block;
      }
      a.imagelink:hover {
        background-color: transparent;
      }
      strong,
      b {
        font-weight: 600;
      }
      p a {
        padding-right: 2px;
        padding-left: 2px;
        margin-right: -2px;
        margin-left: -2px;
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
        border: none;
      }
      code {
        background-color: #f0f0f0;
        font-size: 85%;
        padding: 0.2em;
      }
      pre {
        background-color: #333;
        border-radius: 3px;
        padding: 0.75em 1.2em;
        font-size: 0.8em;
        white-space: pre;
        color: #f0f0f0;
        overflow-x: auto;
      }
      pre code {
        color: #f0f0f0;
        background-color: inherit;
        padding: 0;
      }
      blockquote {
        position: relative;
        margin: 0;
        padding: 0 1em;
      }
      blockquote::before {
        width: 6px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.14);
        content: '';
        display: block;
      }
      iframe {
        border: none;
      }
      .bg-white {
        background-color: #fff !important;
      }
      .bg-node-gray {
        background-color: #333 !important;
      }
      .table-no-border-no-padding {
        border-spacing: 0;
      }
      .table-no-border-no-padding td {
        padding: 0;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: none;
      }
      .hidden {
        display: none;
      }
      html,
      body {
        height: 100%;
      }
      body {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
      }
      #main {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
      }
      header,
      footer {
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }
      footer {
        padding: 0 20px;
      }
      .container {
        width: 100%;
        max-width: 980px;
        margin: 0 auto;
        overflow: hidden;
      }
      .row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
      }
      #main .container {
        padding: 0 20px;
      }
      .list-divider-pipe {
        margin: 0;
        padding: 0;
      }
      .list-divider-pipe li {
        display: inline-block;
      }
      .list-divider-pipe li + li::before {
        content: '|';
        padding: 0 0.3em 0 0.1em;
        color: #999;
      }
      @media screen and (max-width: 480px) {
        nav .list-divider-pipe {
          margin-bottom: 1rem;
          overflow: hidden;
        }
        nav .list-divider-pipe li + li::before {
          display: none;
        }
      }
      .openjsfoundation-footer {
        padding: 1em 20px;
        font-size: 14px;
        color: #fff;
        background: #333;
        direction: ltr;
      }
      .openjsfoundation-footer p + p {
        margin-top: 0;
        margin-bottom: 0.25em;
      }
      .issue-link-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .issue-link {
        text-align: right;
        min-width: 330px;
        margin-left: auto;
      }
      .thanking-contributor {
        max-width: 300px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0.5em 1em;
        margin-top: 1em;
        border: 1px solid #fff;
        border-radius: 3px;
      }
      .thanking-contributor img {
        border-radius: 50%;
        margin-right: 1em;
      }
      @media screen and (max-width: 700px) {
        .issue-link-container {
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
        }
        .issue-link {
          text-align: start;
          margin: 1em 0 0;
          min-width: 0;
        }
      }
      header {
        background-color: #333;
        text-align: center;
        position: relative;
      }
      header > .container {
        overflow: visible;
      }
      header li {
        position: relative;
      }
      header nav {
        cursor: default;
      }
      header nav a,
      header nav a:link,
      header nav a:active {
        padding: 0 8px;
        text-transform: uppercase;
        font-size: 14px;
        color: #ccc !important;
      }
      header nav a:hover {
        background-color: transparent;
        text-decoration: underline;
      }
      header .lang-picker-toggler {
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: transparent;
        border: none;
        color: #ccc;
        cursor: pointer;
        padding: 12px;
      }
      header .lang-picker {
        position: absolute;
        right: 0;
        top: 100%;
        min-height: 100%;
        max-height: 200%;
        overflow: auto;
        background: #333;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      header .lang-picker a {
        color: #ccc;
      }
      header .lang-picker li {
        padding-bottom: 0;
      }
      header .lang-picker li button {
        background-color: transparent;
        border: none;
        color: #ccc !important;
        cursor: pointer;
        display: inline-block;
        font-family: inherit;
        font-size: 14px;
        line-height: 1.5;
        margin: 0 auto;
        padding: 0.5em 1em;
        text-transform: uppercase;
        width: 100%;
      }
      header .lang-picker li button:focus,
      header .lang-picker li button:hover {
        background-color: #43853d;
        text-decoration: underline;
      }
      @media screen and (min-width: 481px) {
        header li {
          padding-bottom: 12px;
        }
        header li.active::after {
          top: 100%;
          left: 50%;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-top-color: #333;
          border-width: 14px;
          margin-left: -7px;
        }
        header li.active:first-child::after {
          margin-left: -14px;
        }
        header a,
        header a:link,
        header a:active {
          padding: 0 8px;
        }
      }
      @media screen and (max-width: 480px) {
        header li {
          width: 50%;
          float: left;
          padding: 0;
          margin: 0;
        }
        header nav {
          margin: 0 20px;
        }
        header a,
        header a:link,
        header a:active {
          padding: 0;
        }
        header .lang-picker-toggler {
          position: relative;
          height: 1.5em;
          padding: 0;
        }
      }
      #logo {
        display: block;
      }
      #logo:hover {
        background-color: transparent;
        text-decoration: underline;
      }
      #logo img {
        margin: 0.5em auto 0;
      }
      footer {
        margin-top: 2em;
        background-color: #333;
        padding: 0;
      }
      footer a,
      footer a:link,
      footer a:active {
        color: #ccc;
      }
      footer a:hover {
        background-color: transparent;
        text-decoration: underline;
      }
      footer.no-margin-top {
        margin-top: 0;
      }
      .home-version {
        padding-top: 10px;
        font-size: 16px;
        color: #666;
      }
      .home-version-banner {
        color: #333;
        font-size: 130%;
        background-color: #eaf5e9;
        padding: 5px 15px;
        border-radius: 2px;
        margin-top: 1em;
      }
      .home-version-banner a {
        color: #026e00;
      }
      .home-version-banner a:hover {
        color: #fff;
      }
      .home-secondary-links {
        color: #51744e;
        font-size: 0.9rem;
      }
      .home-secondary-links a {
        color: #51744e;
      }
      .home-secondary-links a:hover {
        background-color: transparent;
        border-bottom: 1px solid #51744e;
        border-radius: 0;
      }
      #home-intro {
        max-width: 735px;
        margin: 0 auto;
        padding: 30px 0;
        text-align: center;
      }
      #home-intro h2 {
        margin-bottom: 0;
      }
      .home-banner {
        opacity: 1;
        -webkit-transition: opacity 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out;
      }
      .home-banner:hover {
        opacity: 0.85;
      }
      .home-banner > img {
        border-radius: 2px;
      }
      .home-downloadblock {
        display: inline-block;
        margin: 0 8px;
      }
      .home-downloadbutton {
        display: block;
        margin: 10px 4px;
        padding: 0.2em 0.6em;
        background-color: #026e00;
        color: #fff !important;
        border-radius: 2px;
        font-size: 30px;
        font-weight: 400;
        -webkit-transition: background-color 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out;
      }
      .home-downloadbutton:hover {
        background-color: #43853d;
      }
      .home-downloadbutton small {
        display: block;
        font-size: 1rem;
      }
      .blog-index {
        list-style: none;
        padding: 0;
      }
      .blog-index time {
        margin-right: 1em;
        color: #999;
      }
      .blog-index .summary {
        margin-left: 1em;
        font-size: 75%;
      }
      nav.pagination a {
        padding-right: 2px;
        padding-left: 2px;
        margin-right: -2px;
        margin-left: -2px;
      }
      .blogpost-header {
        border-bottom: 1px solid #ccc;
        padding-bottom: 0.5rem;
      }
      .blogpost-header h1 {
        margin-bottom: 0;
      }
      .blogpost-meta {
        font-size: 1rem;
      }
      .download-header h1 {
        width: 40%;
        float: left;
        margin-bottom: -1rem;
      }
      .download-header ul {
        margin-top: 2rem;
        width: 40%;
        float: right;
        text-align: right;
      }
      .download-header::after {
        display: block;
        clear: both;
        content: '';
      }
      .download-hero {
        margin-bottom: 1em;
      }
      .download-hero ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        list-style: none;
        text-align: center;
        margin: 0;
      }
      .download-hero li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-preferred-size: 200px;
        flex-basis: 200px;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
      }
      .download-hero a {
        display: block;
        width: 100%;
        padding-top: 1em;
        color: #026e00;
        background: #eaf5e9;
      }
      .download-hero .download-logo {
        display: block;
        margin: 0 auto;
        fill: #43853d;
      }
      .download-hero p {
        padding-bottom: 1em;
        margin: 1em 0 0;
      }
      .download-hero a:hover {
        background: #43853d;
        color: #fff;
      }
      .download-hero a:hover .download-logo {
        fill: #fff;
      }
      .download-hero a:active {
        background: #026e00;
        color: #fff;
      }
      .download-hero .download-version-toggle {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }
      .download-hero .download-version-toggle a {
        border-radius: 0;
        padding: 5px 2px;
      }
      .download-hero .download-version-toggle a:hover,
      .download-hero .download-version-toggle a:active,
      .download-hero .download-version-toggle a.is-version {
        color: #fff;
        background: #43853d;
      }
      .download-hero .download-version-toggle a.is-version {
        color: #eaf5e9;
        background: #026e00;
      }
      .download-hero .download-version-toggle .title {
        font-size: 1.5em;
        line-height: 1;
      }
      .download-hero .download-version-toggle .tag {
        font-size: 0.8em;
      }
      .download-hero .download-platform {
        border-top: 2px solid #43853d;
      }
      .download-matrix {
        margin-bottom: 1.5rem;
      }
      .download-matrix th {
        text-align: left;
        width: 33%;
      }
      .download-matrix td {
        border: 1px solid #ccc;
      }
      .download-matrix td a,
      .download-matrix td span {
        background: none;
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
        font-size: 0.8em;
      }
      .download-matrix td a:hover,
      .download-matrix td a:active {
        background: #43853d;
        color: #fff;
      }
      h5.download-table-previous-releases-header {
        margin-bottom: 5px;
      }
      .download-table {
        font-size: small;
        border: 1px solid #ccc;
        border-spacing: 0;
      }
      .download-table td {
        padding: 5px;
      }
      .download-table > thead {
        font-weight: 600;
      }
      .download-table > tbody td {
        border-top: 1px solid #ccc;
      }
      .download-table > tbody tr:nth-child(odd) {
        background-color: #f0f0f0;
      }
      .download-table > tbody tr:nth-child(even) {
        background-color: #fff;
      }
      td.download-table-last {
        text-align: right;
      }
      td.download-table-last > a {
        padding: 0 10px;
      }
      @media (max-width: 700px) {
        .download-hero ul {
          display: block;
          text-align: left;
        }
        .download-hero li {
          text-align: center;
          display: block;
        }
        .download-hero .download-version-toggle {
          padding-right: 4px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .download-hero .download-version-toggle li {
          display: inline-block;
          -ms-flex-preferred-size: 160px;
          flex-basis: 160px;
        }
        .download-hero .download-version-toggle .tag {
          font-size: 0.6em;
        }
        .download-matrix {
          display: block;
        }
        .download-matrix th {
          display: block;
          width: 100%;
        }
        .download-matrix tr {
          display: block;
          margin-bottom: 1em;
        }
        .download-matrix td {
          display: block;
          border: none;
        }
        .download-matrix td a {
          text-align: left;
        }
        .download-table {
          border: none;
        }
        .download-table > thead {
          display: none;
        }
        .download-table tr {
          margin-bottom: 10px;
          display: block;
        }
        .download-table td {
          display: block;
          text-align: right;
        }
        .download-table td:last-child {
          border-bottom: 0;
        }
        .download-table td::before {
          content: attr(data-label);
          float: left;
          font-weight: 600;
        }
        .download-table > thead > tr > th,
        .download-table > tbody > tr > th,
        .download-table > tfoot > tr > th,
        .download-table > thead > tr > td,
        .download-table > tbody > tr > td,
        .download-table > tfoot > tr > td,
        .download-table > tbody td {
          border: none;
        }
        .download-table > tbody td {
          border: none;
        }
        td.download-table-last {
          text-align: center;
        }
      }
      @media (max-width: 320px) {
        .download-hero .download-version-toggle li {
          font-size: 1em;
        }
        .download-hero .download-version-toggle .tag {
          font-size: 0.4em;
        }
      }
      html {
        scroll-behavior: smooth;
      }
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
      }
      #scroll-to-top {
        font-size: 1rem;
        color: #333;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 2px;
        position: fixed;
        bottom: 10%;
        right: 0;
        min-width: 20px;
        text-align: center;
        padding: 0 5px 1px;
        opacity: 0;
        -webkit-animation: buttonFade 0.5s 1s 1 forwards;
        animation: buttonFade 0.5s 1s 1 forwards;
      }
      @-webkit-keyframes buttonFade {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes buttonFade {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @media (max-width: 600px) {
        #scroll-to-top span {
          display: none;
        }
      }
      .anchor {
        color: #ccc;
        background: none;
        padding: 0 0.25em;
      }
      .anchor:link,
      .anchor:active,
      .anchor:hover {
        color: #ccc;
        background: inherit;
      }
      .anchor:focus::before {
        content: '#';
      }
      h1:hover > .anchor::before,
      h2:hover > .anchor::before,
      h3:hover > .anchor::before,
      h4:hover > .anchor::before,
      h5:hover > .anchor::before,
      h6:hover > .anchor::before {
        content: '#';
      }
      .btn-navigation {
        padding: 0.1em 0.5em;
      }
      .btn-navigation.btn-prev {
        float: left;
      }
      .btn-navigation.btn-next {
        float: right;
      }
      table.release-schedule {
        width: 100%;
        font-size: 1rem;
        border: 1px solid #ccc;
      }
      table.release-schedule td {
        padding: 5px;
      }
      table.release-schedule > thead {
        font-weight: 600;
        text-align: left;
      }
      table.release-schedule > tbody {
        border-top: 1px solid #ccc;
      }
      table.release-schedule > tbody tr:nth-child(odd) {
        background-color: #f0f0f0;
      }
      table.release-schedule > tbody tr:nth-child(even) {
        background-color: #fff;
      }
      .logos img {
        width: 100%;
      }
      .logos td {
        padding: 20px;
      }
      .contributor-card {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        min-height: 42px;
        width: 300px;
        padding: 1.5em 1em;
        margin: 1em auto;
        border: 1px solid #fff;
        border-radius: 3px;
      }
      .contributor-card > a {
        height: 40px;
        width: 40px;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
      }
      .contributor-card p {
        padding-left: 1em;
        margin: 0;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 1px;
        flex: 1 1 1px;
      }
      .contributor-card .spinner-border {
        margin: 5px;
      }
      @media (max-width: 350px) {
        .contributor-card {
          width: auto;
        }
      }
      @-webkit-keyframes spinner-border {
        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes spinner-border {
        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      .spinner-border {
        box-sizing: border-box;
        display: inline-block;
        width: 2rem;
        height: 2rem;
        vertical-align: text-bottom;
        border: 0.25em solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        -webkit-animation: spinner-border 0.75s linear infinite;
        animation: spinner-border 0.75s linear infinite;
      }
      code[class*='language-'],
      pre[class*='language-'] {
        color: #ccc;
        font-family: Consolas, Monaco, 'Andale Mono', monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }
      pre[class*='language-'] {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
      }
      :not(pre) > code[class*='language-'],
      pre[class*='language-'] {
        background: #2d2d2d;
      }
      :not(pre) > code[class*='language-'] {
        padding: 0.1em;
        border-radius: 0.3em;
      }
      .token.comment,
      .token.block-comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: #999;
      }
      .token.punctuation {
        color: #ccc;
      }
      .token.tag,
      .token.attr-name,
      .token.namespace,
      .token.deleted {
        color: #e2777a;
      }
      .token.function-name {
        color: #6196cc;
      }
      .token.boolean,
      .token.number,
      .token.function {
        color: #f08d49;
      }
      .token.property,
      .token.class-name,
      .token.constant,
      .token.symbol {
        color: #f8c555;
      }
      .token.selector,
      .token.important,
      .token.atrule,
      .token.keyword,
      .token.builtin {
        color: #cc99cd;
      }
      .token.string,
      .token.char,
      .token.attr-value,
      .token.regex,
      .token.variable {
        color: #7ec699;
      }
      .token.operator,
      .token.entity,
      .token.url {
        color: #67cdcc;
      }
      .token.important,
      .token.bold {
        font-weight: bold;
      }
      .token.italic {
        font-style: italic;
      }
      .token.entity {
        cursor: help;
      }
      .token.inserted {
        color: green;
      }
      article a {
        word-break: break-word;
      }
      .intro {
        margin-top: 140px;
        font-size: 38px;
        line-height: 1.2;
      }
      .intro h1 {
        font-size: inherit;
        margin-bottom: 15px;
      }
      .intro h1 + p {
        margin-top: 0;
      }
      .intro span {
        color: #999;
        display: block;
      }
      .has-side-nav aside {
        width: 200px;
        float: left;
        margin-top: 1.5em;
      }
      .has-side-nav aside ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      .has-side-nav aside li {
        padding: 0.1em 0.5em;
      }
      .has-side-nav aside a {
        display: block;
        padding: 5px 10px;
        margin-right: -10px;
        margin-left: -10px;
        line-height: 1;
      }
      .has-side-nav aside .active > a,
      .has-side-nav aside .active > a:hover {
        color: #fff;
        background-color: #026e00;
      }
      .has-side-nav article {
        margin-left: 220px;
      }
      .edit-link {
        float: right;
        font-size: 0.9em;
        margin: 0.5em 0;
      }
      @media screen and (max-width: 480px) {
        .has-side-nav aside {
          width: 100%;
          float: none;
        }
        .has-side-nav article {
          margin-left: 0;
        }
      }
      .full-width {
        width: 100%;
      }
      .small {
        font-size: 10px;
      }
      .color-lightgray {
        color: #999;
      }
      a:hover .color-lightgray {
        color: #fff;
      }
      .no-padding {
        padding: 0;
      }
      .highlight-box {
        background-color: #f0f0f0;
        padding: 5px 15px;
        border-radius: 2px;
        margin-top: 1em;
      }
      .highlight-box *:first-child {
        margin-top: 0.5rem;
      }
      html[dir='rtl'] .has-side-nav aside {
        float: right;
      }
      html[dir='rtl'] .has-side-nav article {
        margin-right: 220px;
        margin-left: 0;
      }
      @media screen and (max-width: 480px) {
        html[dir='rtl'] .has-side-nav article {
          margin-right: 0;
        }
      }

      @media (max-width: 700px) {
        .showcase {
          height: 500px;
        }
        .showcase-content {
          text-align: center;
        }
        .showcase-content img {
          display: none;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Nodejs;
