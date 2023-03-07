import { runApp } from "../../assets/ts/Neupica/Neupica2.js"

window.neupica = {
    loader: {
        loadEntrypoint: function (ev) {
            window.loaded = true

            let serviceWorker = ev.serviceWorker
            let onEntrypointLoaded = ev.onEntrypointLoaded
            let appRunnerApp = ev.appRunnerApp

            let engineInitializer = {
                initializeEngine: function() {
                    return new Promise((resolve, reject) => {
                        try {
                        } catch (e) {
                            reject();
                        }
                        resolve({
                            runApp: function() {
                                return runApp(appRunnerApp)
                            }
                        });
                    })
                }
            }

            onEntrypointLoaded(engineInitializer);
            if (serviceWorker) {}
        }
    }
}