/*!
 * Combined Interface with Header
 * Based on original GPLv3 code by Thomas Weber (2021)
 * Modified 2025 by <Your Name> for AmpMod header integration
 *
 * Licensed under GNU GPLv3
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
import { compose } from "redux";
import { injectIntl, intlShape, defineMessages } from "react-intl";
import { getIsLoading } from "../reducers/project-state.js";

import AppStateHOC from "../lib/app-state-hoc.jsx";
import ErrorBoundaryHOC from "../lib/error-boundary-hoc.jsx";
import TWThemeManagerHOC from "../containers/tw-theme-manager-hoc.jsx";
import TWProjectMetaFetcherHOC from "../lib/tw-project-meta-fetcher-hoc.jsx";
import TWStateManagerHOC from "../lib/tw-state-manager-hoc.jsx";
import SBFileUploaderHOC from "../lib/sb-file-uploader-hoc.jsx";
import TWPackagerIntegrationHOC from "../lib/tw-packager-integration-hoc.jsx";
import { loadServiceWorker } from "./load-service-worker";

import SettingsStore from "../addons/settings-store-singleton";
import AddonChannels from "../addons/channels";
import runAddons from "../addons/entry";

import GUI from "./render-gui.jsx";
import styles from "./interface.css";

import { APP_NAME, APP_SLOGAN } from "@ampmod/branding";

import {
    getSession,
    getProjectMeta,
    createNewProject,
    saveProject,
    shareProject
} from "./aw3-features";

runAddons();

if (AddonChannels.reloadChannel) {
    AddonChannels.reloadChannel.addEventListener("message", () => {
        location.reload();
    });
}
if (AddonChannels.changeChannel) {
    AddonChannels.changeChannel.addEventListener("message", e => {
        SettingsStore.setStoreWithVersionCheck(e.data);
    });
}

const messages = defineMessages({
    defaultTitle: {
        defaultMessage: "Run Scratch projects faster",
        description: "Default title of editor",
        id: "tw.guiDefaultTitle"
    }
});

// Header Component
function Header({ logoSrc, showShare, onSave, onShare }) {
    return (
        <>
            <header className="fixed top-0 left-0 z-10 flex h-[50px] w-full items-center justify-center border-b border-black/20 bg-accent px-2 font-sans text-sm text-white shadow-md md:px-4">
                <div className="flex w-full items-center justify-center gap-4">
                    <a href="https://ampmod.vercel.app" className="logo-link flex items-center">
                        <img
                            src={logoSrc}
                            height="28"
                            alt="AmpMod"
                            draggable="false"
                            className="h-[28px] transition-transform duration-100 hover:scale-105"
                        />
                    </a>

                    {showShare && (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={onSave}
                                className="rounded bg-white px-3 py-2 font-bold text-accent hover:bg-gray-100"
                            >
                                Save
                            </button>
                            <button
                                onClick={onShare}
                                className="rounded bg-white px-3 py-2 font-bold text-accent hover:bg-gray-100"
                            >
                                Share
                            </button>
                        </div>
                    )}
                </div>
            </header>
            <div className="mt-[50px]" />
        </>
    );
}

class Interface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectId: null,
            canEdit: false,
            username: null
        };
    }

    async componentDidMount() {
        const hasSSID = document.cookie.includes("ssid=");
        const hash = window.location.hash.replace("#", "");

        if (hasSSID) {
            if (!hash) {
                try {
                    const id = await createNewProject(this.props.vm);
                    window.location.href = `/editor.html#${id}`;
                } catch (err) {
                    console.error("Error creating project:", err);
                }
            } else {
                try {
                    const session = await getSession();
                    const meta = await getProjectMeta(hash);
                    if (meta.author?.username === session?.username) {
                        this.setState({
                            canEdit: true,
                            username: session.username,
                            projectId: hash
                        });
                    } else {
                        this.setState({ projectId: hash });
                    }
                } catch (err) {
                    console.error("Error loading project meta:", err);
                }
            }
        }
    }

    handleSave = async () => {
        try {
            await saveProject(
                this.props.vm,
                this.state.projectId,
                this.props.projectTitle || "Untitled Project"
            );
            alert("Project saved!");
        } catch {
            alert("Error saving project.");
        }
    };

    handleShare = async () => {
        try {
            await shareProject(this.state.projectId);
            alert("Project shared!");
        } catch {
            alert("Error sharing project.");
        }
    };

    handleUpdateProjectTitle = (title, isDefault) => {
        if (isDefault || !title) {
            document.title = `${APP_NAME} - ${APP_SLOGAN}`;
        } else {
            document.title = `${title} - ${APP_NAME}`;
        }
    };

    render() {
        const { canEdit } = this.state;
        const { isRtl, ...props } = this.props;

        return (
            <div className={classNames(styles.container, styles.editor)} dir={isRtl ? "rtl" : "ltr"}>
                <Header
                    logoSrc="/static/logo.svg"
                    showShare={canEdit}
                    onSave={this.handleSave}
                    onShare={this.handleShare}
                />
                <div className={styles.center}>
                    <GUI
                        onUpdateProjectTitle={this.handleUpdateProjectTitle}
                        backpackVisible
                        backpackHost="_local_"
                        {...props}
                    />
                </div>
            </div>
        );
    }
}

Interface.propTypes = {
    intl: intlShape,
    customStageSize: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
    }),
    isLoading: PropTypes.bool,
    isRtl: PropTypes.bool,
    vm: PropTypes.object,
    projectTitle: PropTypes.string
};

const mapStateToProps = state => ({
    customStageSize: state.scratchGui.customStageSize,
    isLoading: getIsLoading(state.scratchGui.projectState.loadingState),
    isRtl: state.locales.isRtl
});

const ConnectedInterface = injectIntl(connect(mapStateToProps)(Interface));

const WrappedInterface = compose(
    AppStateHOC,
    ErrorBoundaryHOC("TW Interface"),
    TWThemeManagerHOC,
    TWProjectMetaFetcherHOC,
    TWStateManagerHOC,
    SBFileUploaderHOC,
    TWPackagerIntegrationHOC
)(ConnectedInterface);

export default WrappedInterface;
