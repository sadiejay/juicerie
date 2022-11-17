# Juicerie
It is built with [Jekyll](https://jekyllrb.com/docs/) using the [uswds-jekyll theme](https://github.com/18F/uswds-jekyll)

<br/>

## Dependencies

1. Ruby v2.7.2
2. Node v4.2.3+
   - gulp (`npm i -g gulp`)
3. Bundler v2.3.18+
   - jekyll (`gem install jekyll`)
4. Chrome v59 or higher (v60 if on Windows)

<br/>

We recommend using a universal verion manager such as `asdf`
- [asdf Installation Guide](https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies)

**NOTE: Ensure that `legacy_version_file = yes` has been added to your `.asdfrc` file in your home directory. Requires terminal restart.**
- [Configuring $HOME/.asdfrc](https://asdf-vm.com/manage/configuration.html#home-asdfrc)

---

## Getting Started

To work on the site, first [clone the repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). After switching to your local copy of the repository in terminal, run the following command to install project dependencies:

```sh
npm run setup
```

<br/>

Optionally, you can run the following (the above command compiles the following scripts):

```sh
npm install
```

```sh
bundle install
```

```sh
npm update uswds
```

```sh
npm run uswds-copy-assets
```

```sh
npm run uswds-build-sass
```

<br/>

Now that all of your dependencies are installed, run:
 ```sh
 npm run watch
 ```

- This runs a series of commands that watches for any changes in both USWDS node module and the root level asset folders in this repo.

<br/>

Finally, start your local server by running the following command:

```sh
npm run serve
```
   - `npm run serve` or `npm start -- --incremental`: Runs your local server with incremental regeneration enabled to greatly improve build time. Use instead of `npm start`.

<br/>

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance



<br/>
