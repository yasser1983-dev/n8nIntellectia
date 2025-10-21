import { d as defineComponent, a3 as useRoute, r as ref, x as computed, V as VIEWS, c as useI18n, a8 as watch, e as createBlock, g as openBlock, gl as N8nTabs, aH as useTemplateRef, h as createElementBlock, n as normalizeClass, Y as renderSlot, i as createVNode, l as unref, eh as N8nActionToggle, w as withCtx, ab as _sfc_main$4, _ as _export_sfc, a as useToast, av as useProjectsStore, ag as useSourceControlStore, aw as useFoldersStore, aC as getResourcePermissions, f as createCommentVNode, q as N8nButton, k as createTextVNode, t as toDisplayString, b as useRouter, v as useSettingsStore, Q as useUIStore, aG as ProjectTypes, fv as isIconOrEmoji, gm as useElementSize, gn as useResizeObserver, j as createBaseVNode, fw as __unplugin_components_0, m as N8nHeading, p as N8nText, K as mergeProps, aa as Tooltip, go as PROJECT_DATA_STORES } from "./index-DtLsVys_.js";
import { u as useProjectPages } from "./useProjectPages-hhUkwXvb.js";
import { u as useReadyToRunWorkflowsV2Store } from "./readyToRunWorkflowsV2.store-DTrmjlFA.js";
function processDynamicTab(tab, projectId) {
  if (!tab.dynamicRoute) {
    return tab;
  }
  const tabRoute = {
    name: tab.dynamicRoute.name
  };
  if (tab.dynamicRoute.includeProjectId && projectId) {
    tabRoute.params = { projectId };
  }
  const { dynamicRoute, ...tabWithoutDynamic } = tab;
  return {
    ...tabWithoutDynamic,
    to: tabRoute
  };
}
function processDynamicTabs(tabs, projectId) {
  return tabs.map((tab) => processDynamicTab(tab, projectId));
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProjectTabs",
  props: {
    showSettings: { type: Boolean, default: false },
    showExecutions: { type: Boolean, default: true },
    pageType: { default: "project" },
    additionalTabs: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const locale = useI18n();
    const route = useRoute();
    const selectedTab = ref("");
    const selectedTabLabel = computed(() => selectedTab.value ? String(selectedTab.value) : "");
    const projectId = computed(() => {
      return Array.isArray(route?.params?.projectId) ? route.params.projectId[0] : route?.params?.projectId;
    });
    const getRouteConfigs = () => {
      if (projectId.value) {
        return {
          workflows: {
            name: VIEWS.PROJECTS_WORKFLOWS,
            params: { projectId: projectId.value }
          },
          credentials: {
            name: VIEWS.PROJECTS_CREDENTIALS,
            params: { projectId: projectId.value }
          },
          executions: {
            name: VIEWS.PROJECTS_EXECUTIONS,
            params: { projectId: projectId.value }
          }
        };
      }
      if (props.pageType === "shared") {
        return {
          workflows: { name: VIEWS.SHARED_WORKFLOWS },
          credentials: { name: VIEWS.SHARED_CREDENTIALS },
          executions: { name: VIEWS.NOT_FOUND }
        };
      }
      return {
        workflows: { name: VIEWS.WORKFLOWS },
        credentials: { name: VIEWS.CREDENTIALS },
        executions: { name: VIEWS.EXECUTIONS }
      };
    };
    const createTab = (label, routeKey, routes) => {
      return {
        label: locale.baseText(label),
        value: routes[routeKey].name,
        to: routes[routeKey]
      };
    };
    const options = computed(() => {
      const routes = getRouteConfigs();
      const tabs = [
        createTab("mainSidebar.workflows", "workflows", routes),
        createTab("mainSidebar.credentials", "credentials", routes)
      ];
      if (props.showExecutions) {
        tabs.push(createTab("mainSidebar.executions", "executions", routes));
      }
      if (props.additionalTabs?.length) {
        const processedAdditionalTabs = processDynamicTabs(props.additionalTabs, projectId.value);
        tabs.push(...processedAdditionalTabs);
      }
      if (props.showSettings) {
        tabs.push({
          label: locale.baseText("projects.settings"),
          value: VIEWS.PROJECT_SETTINGS,
          to: { name: VIEWS.PROJECT_SETTINGS, params: { projectId: projectId.value } }
        });
      }
      return tabs;
    });
    watch(
      () => route?.name,
      () => {
        selectedTab.value = route.name === VIEWS.PROJECTS_FOLDERS ? VIEWS.PROJECTS_WORKFLOWS : route.name;
      },
      { immediate: true }
    );
    function onSelectTab(value) {
      selectedTab.value = value;
    }
    return (_ctx, _cache) => {
      const _component_N8nTabs = N8nTabs;
      return openBlock(), createBlock(_component_N8nTabs, {
        "model-value": selectedTabLabel.value,
        options: options.value,
        "data-test-id": "project-tabs",
        "onUpdate:modelValue": onSelectTab
      }, null, 8, ["model-value", "options"]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCreateResource",
  props: {
    actions: {},
    disabled: { type: Boolean },
    type: {}
  },
  emits: ["action"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const actionToggleRef = useTemplateRef("actionToggleRef");
    __expose({
      openActionToggle: (isOpen) => actionToggleRef.value?.openActionToggle(isOpen)
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.buttonGroup])
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(unref(N8nActionToggle), {
          ref_key: "actionToggleRef",
          ref: actionToggleRef,
          "data-test-id": "add-resource",
          actions: _ctx.actions,
          placement: "bottom-end",
          teleported: false,
          onAction: _cache[0] || (_cache[0] = ($event) => emit("action", $event))
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$4), {
              disabled: _ctx.disabled,
              class: normalizeClass([_ctx.$style.buttonGroupDropdown]),
              icon: "chevron-down",
              type: _ctx.type ?? "primary"
            }, null, 8, ["disabled", "class", "type"])
          ]),
          _: 1
        }, 8, ["actions"])
      ], 2);
    };
  }
});
const buttonGroup = "_buttonGroup_aulto_123";
const buttonGroupDropdown = "_buttonGroupDropdown_aulto_137";
const style0$1 = {
  buttonGroup,
  buttonGroupDropdown
};
const cssModules$1 = {
  "$style": style0$1
};
const ProjectCreateResource = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
const truncateTextToFitWidth = (text, availableWidth, fontSizeInPixels) => {
  if (!text || availableWidth <= 0) {
    return "";
  }
  const averageCharWidth = 0.55 * fontSizeInPixels;
  const maxLengthToDisplay = Math.floor(availableWidth / averageCharWidth);
  if (text.length <= maxLengthToDisplay) {
    return "";
  }
  const truncated = text.slice(0, maxLengthToDisplay);
  const lastSpaceIndex = truncated.lastIndexOf(" ");
  return truncated.slice(0, lastSpaceIndex === -1 ? maxLengthToDisplay : lastSpaceIndex) + "...";
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReadyToRunV2Button",
  props: {
    hasActiveCallouts: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const i18n = useI18n();
    const toast = useToast();
    const projectPages = useProjectPages();
    const projectsStore = useProjectsStore();
    const sourceControlStore = useSourceControlStore();
    const foldersStore = useFoldersStore();
    const readyToRunWorkflowsV2Store = useReadyToRunWorkflowsV2Store();
    const projectPermissions = computed(() => {
      return getResourcePermissions(
        projectsStore.currentProject?.scopes ?? projectsStore.personalProject?.scopes
      );
    });
    const showButton = computed(() => {
      return readyToRunWorkflowsV2Store.getButtonVisibility(
        foldersStore.totalWorkflowCount > 0,
        // Has workflows
        projectPermissions.value.workflow.create,
        sourceControlStore.preferences.branchReadOnly
      ) && !props.hasActiveCallouts;
    });
    const handleClick = async () => {
      const projectId = projectPages.isOverviewSubPage ? projectsStore.personalProject?.id : route.params.projectId;
      try {
        await readyToRunWorkflowsV2Store.claimCreditsAndOpenWorkflow(
          "button",
          route.params.folderId,
          projectId
        );
      } catch (error) {
        toast.showError(error, i18n.baseText("generic.error"));
      }
    };
    return (_ctx, _cache) => {
      return showButton.value ? (openBlock(), createBlock(unref(N8nButton), {
        key: 0,
        "data-test-id": "ready-to-run-v2-button",
        type: "secondary",
        icon: "sparkles",
        loading: unref(readyToRunWorkflowsV2Store).claimingCredits,
        disabled: unref(sourceControlStore).preferences.branchReadOnly || unref(readyToRunWorkflowsV2Store).claimingCredits,
        onClick: handleClick
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(i18n).baseText("workflows.empty.readyToRunV2")), 1)
        ]),
        _: 1
      }, 8, ["loading", "disabled"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1 = { style: { "display": "flex", "gap": "var(--spacing-xs)", "align-items": "center" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectHeader",
  props: {
    hasActiveCallouts: { type: Boolean }
  },
  emits: ["createFolder"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const projectsStore = useProjectsStore();
    const sourceControlStore = useSourceControlStore();
    const settingsStore = useSettingsStore();
    const uiStore = useUIStore();
    const projectPages = useProjectPages();
    const props = __props;
    const emit = __emit;
    const headerIcon = computed(() => {
      if (projectsStore.currentProject?.type === ProjectTypes.Personal) {
        return { type: "icon", value: "user" };
      } else if (projectsStore.currentProject?.name) {
        return isIconOrEmoji(projectsStore.currentProject.icon) ? projectsStore.currentProject.icon : { type: "icon", value: "layers" };
      } else {
        return { type: "icon", value: "house" };
      }
    });
    const projectName = computed(() => {
      if (!projectsStore.currentProject) {
        if (projectPages.isSharedSubPage) {
          return i18n.baseText("projects.header.shared.title");
        } else if (projectPages.isOverviewSubPage) {
          return i18n.baseText("projects.menu.overview");
        }
        return null;
      } else if (projectsStore.currentProject.type === ProjectTypes.Personal) {
        return i18n.baseText("projects.menu.personal");
      } else {
        return projectsStore.currentProject.name;
      }
    });
    const projectPermissions = computed(
      () => getResourcePermissions(projectsStore.currentProject?.scopes).project
    );
    const showSettings = computed(
      () => !!route?.params?.projectId && !!projectPermissions.value.update && projectsStore.currentProject?.type === ProjectTypes.Team
    );
    const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
    const isPersonalProject = computed(() => {
      return homeProject.value?.type === ProjectTypes.Personal;
    });
    const showFolders = computed(() => {
      return settingsStore.isFoldersFeatureEnabled && [VIEWS.PROJECTS_WORKFLOWS, VIEWS.PROJECTS_FOLDERS].includes(route.name);
    });
    const customProjectTabs = computed(() => {
      let tabType;
      if (projectPages.isSharedSubPage) {
        tabType = "shared";
      } else if (projectPages.isOverviewSubPage) {
        tabType = "overview";
      } else {
        tabType = "project";
      }
      const activeModules = Object.keys(uiStore.moduleTabs[tabType]).filter(
        settingsStore.isModuleActive
      );
      return activeModules.flatMap((module) => uiStore.moduleTabs[tabType][module]);
    });
    const ACTION_TYPES = {
      WORKFLOW: "workflow",
      CREDENTIAL: "credential",
      FOLDER: "folder",
      DATA_STORE: "dataStore"
    };
    const createWorkflowButton = computed(() => ({
      value: ACTION_TYPES.WORKFLOW,
      label: i18n.baseText("projects.header.create.workflow"),
      icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
      size: "mini",
      disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).workflow.create
    }));
    const menu = computed(() => {
      const items = [
        {
          value: ACTION_TYPES.CREDENTIAL,
          label: i18n.baseText("projects.header.create.credential"),
          disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).credential.create
        }
      ];
      if (showFolders.value) {
        items.push({
          value: ACTION_TYPES.FOLDER,
          label: i18n.baseText("projects.header.create.folder"),
          disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).folder.create
        });
      }
      if (settingsStore.isDataTableFeatureEnabled) {
        items.push({
          value: ACTION_TYPES.DATA_STORE,
          label: i18n.baseText("dataStore.add.button.label"),
          disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes)?.dataStore?.create
        });
      }
      return items;
    });
    const showProjectIcon = computed(() => {
      return !projectPages.isOverviewSubPage && !projectPages.isSharedSubPage && !isPersonalProject.value;
    });
    function isCredentialsListView(routeName) {
      const CREDENTIAL_VIEWS = [
        VIEWS.PROJECTS_CREDENTIALS,
        VIEWS.CREDENTIALS,
        VIEWS.SHARED_CREDENTIALS
      ];
      return CREDENTIAL_VIEWS.includes(routeName);
    }
    function isWorkflowListView(routeName) {
      const WORKFLOWS_VIEWS = [
        VIEWS.PROJECTS_WORKFLOWS,
        VIEWS.WORKFLOWS,
        VIEWS.SHARED_WORKFLOWS,
        VIEWS.PROJECTS_FOLDERS
      ];
      return WORKFLOWS_VIEWS.includes(routeName);
    }
    function getUIContext(routeName) {
      if (isCredentialsListView(routeName)) {
        return "credentials_list";
      } else if (isWorkflowListView(routeName)) {
        return "workflow_list";
      } else {
        return;
      }
    }
    const actions2 = {
      [ACTION_TYPES.WORKFLOW]: (projectId) => {
        void router.push({
          name: VIEWS.NEW_WORKFLOW,
          query: {
            projectId,
            parentFolderId: route.params.folderId,
            uiContext: getUIContext(route.name?.toString() ?? "")
          }
        });
      },
      [ACTION_TYPES.CREDENTIAL]: (projectId) => {
        void router.push({
          name: VIEWS.PROJECTS_CREDENTIALS,
          params: {
            projectId,
            credentialId: "create"
          },
          query: {
            uiContext: getUIContext(route.name?.toString() ?? "")
          }
        });
      },
      [ACTION_TYPES.FOLDER]: () => {
        emit("createFolder");
      },
      [ACTION_TYPES.DATA_STORE]: (projectId) => {
        void router.push({
          name: PROJECT_DATA_STORES,
          params: { projectId, new: "new" }
        });
      }
    };
    const pageType = computed(() => {
      if (projectPages.isSharedSubPage) {
        return "shared";
      } else if (projectPages.isOverviewSubPage) {
        return "overview";
      } else {
        return "project";
      }
    });
    const sectionDescription = computed(() => {
      if (projectPages.isSharedSubPage) {
        return i18n.baseText("projects.header.shared.subtitle");
      } else if (projectPages.isOverviewSubPage) {
        return i18n.baseText(
          settingsStore.isDataTableFeatureEnabled ? "projects.header.overview.subtitleWithDataTables" : "projects.header.overview.subtitle"
        );
      } else if (isPersonalProject.value) {
        return i18n.baseText(
          settingsStore.isDataTableFeatureEnabled ? "projects.header.personal.subtitleWithDataTables" : "projects.header.personal.subtitle"
        );
      }
      return null;
    });
    const projectDescription = computed(() => {
      if (projectPages.isProjectsSubPage) {
        return projectsStore.currentProject?.description;
      }
      return null;
    });
    const projectHeaderRef = ref(null);
    const { width: projectHeaderWidth } = useElementSize(projectHeaderRef);
    const headerActionsRef = ref(null);
    const { width: headerActionsWidth } = useElementSize(headerActionsRef);
    const projectSubtitleFontSizeInPxs = ref(null);
    useResizeObserver(projectHeaderRef, () => {
      if (!projectHeaderRef.value) {
        return;
      }
      const projectSubtitleEl = projectHeaderRef.value.querySelector(
        'span[data-test-id="project-subtitle"]'
      );
      if (projectSubtitleEl) {
        const computedStyle = window.getComputedStyle(projectSubtitleEl);
        projectSubtitleFontSizeInPxs.value = parseFloat(computedStyle.fontSize);
      }
    });
    const projectDescriptionTruncated = computed(() => {
      if (!projectDescription.value) {
        return "";
      }
      const availableTextWidth = projectHeaderWidth.value - headerActionsWidth.value;
      const fontSizeInPixels = projectSubtitleFontSizeInPxs.value ?? 14;
      return truncateTextToFitWidth(projectDescription.value, availableTextWidth, fontSizeInPixels);
    });
    const onSelect = (action) => {
      const executableAction = actions2[action];
      if (!homeProject.value) {
        return;
      }
      executableAction(homeProject.value.id);
    };
    return (_ctx, _cache) => {
      const _component_N8nHeading = N8nHeading;
      const _component_N8nText = N8nText;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", {
          ref_key: "projectHeaderRef",
          ref: projectHeaderRef,
          class: normalizeClass(_ctx.$style.projectHeader)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.projectDetails)
          }, [
            showProjectIcon.value ? (openBlock(), createBlock(__unplugin_components_0, {
              key: 0,
              icon: headerIcon.value,
              "border-less": true,
              size: "medium"
            }, null, 8, ["icon"])) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.headerActions)
            }, [
              projectName.value ? (openBlock(), createBlock(_component_N8nHeading, {
                key: 0,
                bold: "",
                tag: "h2",
                size: "xlarge",
                "data-test-id": "project-name"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(projectName.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              sectionDescription.value ? (openBlock(), createBlock(_component_N8nText, {
                key: 1,
                color: "text-light",
                "data-test-id": "project-subtitle"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(sectionDescription.value), 1)
                ]),
                _: 1
              })) : projectDescription.value ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.projectDescriptionWrapper)
              }, [
                createVNode(_component_N8nText, {
                  color: "text-light",
                  "data-test-id": "project-subtitle"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(projectDescriptionTruncated.value || projectDescription.value), 1)
                  ]),
                  _: 1
                }),
                projectDescriptionTruncated.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.tooltip)
                }, [
                  createVNode(_component_N8nText, { color: "text-light" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(projectDescription.value), 1)
                    ]),
                    _: 1
                  })
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ], 2)
          ], 2),
          unref(route).name !== unref(VIEWS).PROJECT_SETTINGS ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "headerActionsRef",
            ref: headerActionsRef,
            class: normalizeClass([_ctx.$style.headerActions])
          }, [
            createVNode(unref(Tooltip), {
              disabled: !unref(sourceControlStore).preferences.branchReadOnly,
              content: unref(i18n).baseText("readOnlyEnv.cantAdd.any")
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1, [
                  createVNode(_sfc_main$1, {
                    "has-active-callouts": props.hasActiveCallouts
                  }, null, 8, ["has-active-callouts"]),
                  createVNode(ProjectCreateResource, {
                    "data-test-id": "add-resource-buttons",
                    actions: menu.value,
                    disabled: unref(sourceControlStore).preferences.branchReadOnly,
                    onAction: onSelect
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(N8nButton), mergeProps({ "data-test-id": "add-resource-workflow" }, createWorkflowButton.value, {
                        onClick: _cache[0] || (_cache[0] = ($event) => onSelect(ACTION_TYPES.WORKFLOW))
                      }), null, 16)
                    ]),
                    _: 1
                  }, 8, ["actions", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["disabled", "content"])
          ], 2)) : createCommentVNode("", true)
        ], 2),
        renderSlot(_ctx.$slots, "default"),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.actions)
        }, [
          createVNode(_sfc_main$3, {
            "page-type": pageType.value,
            "show-executions": !unref(projectPages).isSharedSubPage,
            "show-settings": showSettings.value,
            "additional-tabs": customProjectTabs.value
          }, null, 8, ["page-type", "show-executions", "show-settings", "additional-tabs"])
        ], 2)
      ]);
    };
  }
});
const projectHeader = "_projectHeader_u6cmv_123";
const projectDetails = "_projectDetails_u6cmv_131";
const actions = "_actions_u6cmv_136";
const projectDescriptionWrapper = "_projectDescriptionWrapper_u6cmv_140";
const tooltip = "_tooltip_u6cmv_144";
const headerActions = "_headerActions_u6cmv_167";
const style0 = {
  projectHeader,
  projectDetails,
  actions,
  projectDescriptionWrapper,
  tooltip,
  headerActions
};
const cssModules = {
  "$style": style0
};
const ProjectHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ProjectHeader as P
};
