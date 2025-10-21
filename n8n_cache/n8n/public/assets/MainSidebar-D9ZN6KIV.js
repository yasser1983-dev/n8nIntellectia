import { d as defineComponent, r as ref, e as createBlock, g as openBlock, w as withCtx, i as createVNode, l as unref, b6 as ElSubMenu, n as normalizeClass, h as createElementBlock, F as Fragment, A as renderList, b7 as _sfc_main$6, b8 as ElMenuItem, f as createCommentVNode, k as createTextVNode, Y as renderSlot, N as N8nIcon, p as N8nText, t as toDisplayString, K as mergeProps, b9 as withKeys, ba as ElMenu, _ as _export_sfc, bb as get, ag as useSourceControlStore, av as useProjectsStore, a3 as useRoute, b as useRouter, x as computed, aE as hasPermission, aC as getResourcePermissions, aq as normalizeStyle, j as createBaseVNode, aa as Tooltip, q as N8nButton, c as useI18n, a0 as defineStore, bc as useCloudPlanStore, au as useRootStore, bd as useStorage, be as DateTime, a5 as STORES, am as useTelemetry, v as useSettingsStore, a as useToast, bf as sortByProperty, V as VIEWS, bg as updatedIconSet, aB as usePageRedirectionHelper, u as useUsersStore, b2 as onBeforeMount, bh as N8nMenuItem, bi as useDebugInfo, bj as useVersionsStore, Q as useUIStore, C as N8nLink, bk as VERSIONS_MODAL_KEY, bl as useTemplatesStore, a2 as useWorkflowsStore, bm as usePersonalizedTemplatesV2Store, P as useDebounce, bn as useCalloutHelpers, bo as useKeybindings, bp as RELEASE_NOTES_URL, o as onMounted, bq as useExternalHooks, Z as nextTick, X as onBeforeUnmount, br as onClickOutside, a9 as resolveComponent, ac as I18nT, ab as _sfc_main$7, bs as createSlots, G as N8nAvatar, aN as N8nActionDropdown, bt as N8nMenu, bu as WHATS_NEW_MODAL_KEY, bv as ABOUT_MODAL_KEY, bw as EXPERIMENT_TEMPLATE_RECO_V2_KEY, bx as trackTemplatesClick, by as TemplateClickSource } from "./index-DtLsVys_.js";
import { L as Logo } from "./Logo-RKQLvl_m.js";
const ROOT_MENU_INDEX = "-1";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    name: "N8nNavigationDropdown"
  },
  __name: "NavigationDropdown",
  props: {
    menu: {},
    disabled: { type: Boolean },
    teleport: { type: Boolean }
  },
  emits: ["itemClick", "select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const menuRef = ref(null);
    const emit = __emit;
    const close = () => {
      menuRef.value?.close(ROOT_MENU_INDEX);
    };
    const menuTrigger = ref("click");
    const onOpen = (index) => {
      if (index !== ROOT_MENU_INDEX) return;
      menuTrigger.value = "hover";
    };
    const onClose = (index) => {
      if (index !== ROOT_MENU_INDEX) return;
      menuTrigger.value = "click";
    };
    __expose({
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElMenu), {
        ref_key: "menuRef",
        ref: menuRef,
        mode: "horizontal",
        "unique-opened": "",
        "menu-trigger": menuTrigger.value,
        ellipsis: false,
        class: normalizeClass(_ctx.$style.dropdown),
        onSelect: _cache[1] || (_cache[1] = ($event) => emit("select", $event)),
        onKeyup: withKeys(close, ["escape"]),
        onOpen,
        onClose
      }, {
        default: withCtx(() => [
          createVNode(unref(ElSubMenu), {
            index: ROOT_MENU_INDEX,
            class: normalizeClass(_ctx.$style.trigger),
            "popper-offset": -10,
            "popper-class": _ctx.$style.submenu,
            disabled: _ctx.disabled,
            teleported: _ctx.teleport
          }, {
            title: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menu, (item) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: item.id
                }, [
                  item.submenu ? (openBlock(), createBlock(unref(ElSubMenu), {
                    key: 0,
                    "popper-class": _ctx.$style.nestedSubmenu,
                    index: item.id,
                    "popper-offset": -10,
                    "data-test-id": "navigation-submenu"
                  }, {
                    title: withCtx(() => [
                      createTextVNode(toDisplayString(item.title), 1)
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.submenu, (subitem) => {
                        return openBlock(), createBlock(unref(_sfc_main$6), {
                          key: subitem.id,
                          to: !subitem.disabled && subitem.route || void 0
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(ElMenuItem), {
                              "data-test-id": "navigation-submenu-item",
                              index: subitem.id,
                              disabled: subitem.disabled,
                              onClick: _cache[0] || (_cache[0] = ($event) => emit("itemClick", $event))
                            }, {
                              default: withCtx(() => [
                                subitem.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                  typeof subitem.icon === "string" || subitem.icon.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon), {
                                    key: 0,
                                    class: normalizeClass(_ctx.$style.submenu__icon),
                                    icon: typeof subitem.icon === "object" ? subitem.icon.value : subitem.icon
                                  }, null, 8, ["class", "icon"])) : subitem.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText), {
                                    key: 1,
                                    class: normalizeClass(_ctx.$style.submenu__icon)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(subitem.icon.value), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])) : createCommentVNode("", true)
                                ], 64)) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(subitem.title) + " ", 1),
                                renderSlot(_ctx.$slots, `item.append.${item.id}`, mergeProps({ ref_for: true }, { item }))
                              ]),
                              _: 2
                            }, 1032, ["index", "disabled"])
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["popper-class", "index"])) : (openBlock(), createBlock(unref(_sfc_main$6), {
                    key: 1,
                    to: !item.disabled && item.route || void 0
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ElMenuItem), {
                        index: item.id,
                        disabled: item.disabled,
                        "data-test-id": "navigation-menu-item"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title) + " ", 1),
                          renderSlot(_ctx.$slots, `item.append.${item.id}`, mergeProps({ ref_for: true }, { item }))
                        ]),
                        _: 2
                      }, 1032, ["index", "disabled"])
                    ]),
                    _: 2
                  }, 1032, ["to"]))
                ], 64);
              }), 128))
            ]),
            _: 3
          }, 8, ["class", "popper-class", "disabled", "teleported"])
        ]),
        _: 3
      }, 8, ["menu-trigger", "class"]);
    };
  }
});
const dropdown = "_dropdown_1dr86_123";
const nestedSubmenu = "_nestedSubmenu_1dr86_140";
const submenu = "_submenu_1dr86_145";
const submenu__icon = "_submenu__icon_1dr86_173";
const style0$5 = {
  dropdown,
  nestedSubmenu,
  submenu,
  submenu__icon
};
const cssModules$5 = {
  "$style": style0$5
};
const N8nNavigationDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$5]]);
async function getBecomeCreatorCta(context) {
  const response = await get(context.baseUrl, "/cta/become-creator");
  return response;
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MainSidebarSourceControl",
  props: {
    isCollapsed: { type: Boolean }
  },
  setup(__props) {
    const sourceControlStore = useSourceControlStore();
    const projectStore = useProjectsStore();
    const i18n = useI18n();
    const route = useRoute();
    const router = useRouter();
    const tooltipOpenDelay = ref(300);
    const currentBranch = computed(() => {
      return sourceControlStore.preferences.branchName;
    });
    const hasPushPermission = computed(() => {
      return hasPermission(["rbac"], { rbac: { scope: "sourceControl:push" } }) || projectStore.myProjects.some(
        (project) => project.type === "team" && getResourcePermissions(project?.scopes)?.sourceControl?.push
      );
    });
    const hasPullPermission = computed(() => {
      return hasPermission(["rbac"], { rbac: { scope: "sourceControl:pull" } });
    });
    const sourceControlAvailable = computed(
      () => sourceControlStore.isEnterpriseSourceControlEnabled && (hasPullPermission.value || hasPushPermission.value)
    );
    async function pushWorkfolder() {
      void router.push({
        query: {
          ...route.query,
          sourceControl: "push"
        }
      });
    }
    function pullWorkfolder() {
      void router.push({
        query: {
          ...route.query,
          sourceControl: "pull"
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_button = N8nButton;
      const _component_n8n_tooltip = Tooltip;
      return sourceControlAvailable.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass({
          [_ctx.$style.sync]: true,
          [_ctx.$style.collapsed]: _ctx.isCollapsed,
          [_ctx.$style.isConnected]: unref(sourceControlStore).isEnterpriseSourceControlEnabled
        }),
        style: normalizeStyle({ borderLeftColor: unref(sourceControlStore).preferences.branchColor }),
        "data-test-id": "main-sidebar-source-control"
      }, [
        unref(sourceControlStore).preferences.connected && unref(sourceControlStore).preferences.branchName ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.connected),
          "data-test-id": "main-sidebar-source-control-connected"
        }, [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.$style.branchName)
          }, [
            createVNode(_component_n8n_icon, { icon: "git-branch" }),
            createTextVNode(" " + toDisplayString(currentBranch.value), 1)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass({ "pt-xs": !_ctx.isCollapsed })
          }, [
            createVNode(_component_n8n_tooltip, {
              disabled: !_ctx.isCollapsed && hasPullPermission.value,
              "show-after": tooltipOpenDelay.value,
              placement: _ctx.isCollapsed ? "right" : "top"
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n).baseText("settings.sourceControl.button.pull")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_n8n_button, {
                  class: normalizeClass({
                    "mr-2xs": !_ctx.isCollapsed,
                    "mb-2xs": _ctx.isCollapsed
                  }),
                  disabled: !hasPullPermission.value,
                  "data-test-id": "main-sidebar-source-control-pull",
                  icon: "arrow-down",
                  type: "tertiary",
                  size: "mini",
                  square: _ctx.isCollapsed,
                  label: _ctx.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.pull"),
                  onClick: pullWorkfolder
                }, null, 8, ["class", "disabled", "square", "label"])
              ]),
              _: 1
            }, 8, ["disabled", "show-after", "placement"]),
            createVNode(_component_n8n_tooltip, {
              disabled: !_ctx.isCollapsed && !unref(sourceControlStore).preferences.branchReadOnly && hasPushPermission.value,
              "show-after": tooltipOpenDelay.value,
              placement: _ctx.isCollapsed ? "right" : "top"
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value ? unref(i18n).baseText("settings.sourceControl.button.push.forbidden") : unref(i18n).baseText("settings.sourceControl.button.push")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_n8n_button, {
                  square: _ctx.isCollapsed,
                  label: _ctx.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.push"),
                  disabled: unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value,
                  "data-test-id": "main-sidebar-source-control-push",
                  icon: "arrow-up",
                  type: "tertiary",
                  size: "mini",
                  onClick: pushWorkfolder
                }, null, 8, ["square", "label", "disabled"])
              ]),
              _: 1
            }, 8, ["disabled", "show-after", "placement"])
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ], 6)) : createCommentVNode("", true);
    };
  }
});
const sync = "_sync_fv3ov_123";
const isConnected = "_isConnected_fv3ov_130";
const collapsed$1 = "_collapsed_fv3ov_134";
const branchName = "_branchName_fv3ov_144";
const connected = "_connected_fv3ov_154";
const style0$4 = {
  sync,
  isConnected,
  collapsed: collapsed$1,
  branchName,
  connected
};
const cssModules$4 = {
  "$style": style0$4
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$4]]);
const LOCAL_STORAGE_KEY = "N8N_BECOME_TEMPLATE_CREATOR_CTA_DISMISSED_AT";
const RESHOW_DISMISSED_AFTER_DAYS = 30;
const POLL_INTERVAL_IN_MS = 15 * 60 * 1e3;
const useBecomeTemplateCreatorStore = defineStore(STORES.BECOME_TEMPLATE_CREATOR, () => {
  const cloudPlanStore = useCloudPlanStore();
  const rootStore = useRootStore();
  const dismissedAt = useStorage(LOCAL_STORAGE_KEY);
  const ctaMeetsCriteria = ref(false);
  const monitorCtasTimer = ref(null);
  const isDismissed = computed(() => {
    return dismissedAt.value ? !hasEnoughTimePassedSinceDismissal(dismissedAt.value) : false;
  });
  const showBecomeCreatorCta = computed(() => {
    return ctaMeetsCriteria.value && !cloudPlanStore.userIsTrialing && !isDismissed.value;
  });
  const dismissCta = () => {
    dismissedAt.value = DateTime.now().toISO();
  };
  const fetchBecomeCreatorCta = async () => {
    const becomeCreatorCta = await getBecomeCreatorCta(rootStore.restApiContext);
    ctaMeetsCriteria.value = becomeCreatorCta;
  };
  const fetchUserCtasIfNeeded = async () => {
    if (isDismissed.value || cloudPlanStore.userIsTrialing || ctaMeetsCriteria.value) {
      return;
    }
    await fetchBecomeCreatorCta();
  };
  const startMonitoringCta = () => {
    if (monitorCtasTimer.value) {
      return;
    }
    setTimeout(fetchUserCtasIfNeeded, 1e3);
    monitorCtasTimer.value = setInterval(fetchUserCtasIfNeeded, POLL_INTERVAL_IN_MS);
  };
  const stopMonitoringCta = () => {
    if (!monitorCtasTimer.value) {
      return;
    }
    clearInterval(monitorCtasTimer.value);
    monitorCtasTimer.value = null;
  };
  return {
    showBecomeCreatorCta,
    dismissCta,
    startMonitoringCta,
    stopMonitoringCta
  };
});
function hasEnoughTimePassedSinceDismissal(dismissedAt) {
  const reshowAtTime = DateTime.fromISO(dismissedAt).plus({
    days: RESHOW_DISMISSED_AFTER_DAYS
  });
  return reshowAtTime <= DateTime.now();
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BecomeTemplateCreatorCta",
  setup(__props) {
    const i18n = useI18n();
    const store = useBecomeTemplateCreatorStore();
    const telemetry = useTelemetry();
    const onClick = () => {
      telemetry.track("User clicked become creator CTA");
    };
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_button = N8nButton;
      return unref(store).showBecomeCreatorCta ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.container),
        "data-test-id": "become-template-creator-cta"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.textAndCloseButton)
        }, [
          createBaseVNode("p", {
            class: normalizeClass(_ctx.$style.text)
          }, toDisplayString(unref(i18n).baseText("becomeCreator.text")), 3),
          createBaseVNode("button", {
            class: normalizeClass(_ctx.$style.closeButton),
            "data-test-id": "close-become-template-creator-cta",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(store).dismissCta())
          }, [
            createVNode(_component_n8n_icon, {
              icon: "x",
              size: "xsmall",
              title: unref(i18n).baseText("generic.close")
            }, null, 8, ["title"])
          ], 2)
        ], 2),
        createVNode(_component_n8n_button, {
          class: normalizeClass(_ctx.$style.becomeCreatorButton),
          label: unref(i18n).baseText("becomeCreator.buttonText"),
          size: "xmini",
          type: "secondary",
          element: "a",
          href: "https://creators.n8n.io/hub",
          target: "_blank",
          onClick
        }, null, 8, ["class", "label"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const container$1 = "_container_977ul_123";
const textAndCloseButton = "_textAndCloseButton_977ul_131";
const text = "_text_977ul_131";
const closeButton = "_closeButton_977ul_144";
const becomeCreatorButton = "_becomeCreatorButton_977ul_156";
const style0$3 = {
  container: container$1,
  textAndCloseButton,
  text,
  closeButton,
  becomeCreatorButton
};
const cssModules$3 = {
  "$style": style0$3
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const isIconName = (icon) => typeof icon === "string" && Object.keys(updatedIconSet).includes(icon);
const isProjectIcon = (icon) => isIconName(icon) || typeof icon === "object" && icon !== null && "value" in icon && typeof icon.value === "string" && "type" in icon && (icon.type === "emoji" || icon.type === "icon" && isIconName(icon.value));
const useGlobalEntityCreation = () => {
  const CREATE_PROJECT_ID = "create-project";
  const WORKFLOWS_MENU_ID = "workflow";
  const CREDENTIALS_MENU_ID = "credential";
  const DEFAULT_ICON = "layers";
  const settingsStore = useSettingsStore();
  const cloudPlanStore = useCloudPlanStore();
  const projectsStore = useProjectsStore();
  const sourceControlStore = useSourceControlStore();
  const router = useRouter();
  const i18n = useI18n();
  const toast = useToast();
  const isCreatingProject = ref(false);
  const displayProjects = computed(
    () => sortByProperty(
      "name",
      projectsStore.myProjects.filter((p) => p.type === "team")
    )
  );
  const disabledWorkflow = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).workflow.create;
  const disabledCredential = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).credential.create;
  const menu = computed(() => {
    if (!projectsStore.isTeamProjectFeatureEnabled) {
      return [
        {
          id: "workflow",
          title: "Workflow",
          route: {
            name: VIEWS.NEW_WORKFLOW,
            query: {
              projectId: projectsStore.personalProject?.id
            }
          }
        },
        {
          id: "credential",
          title: "Credential",
          route: {
            name: VIEWS.CREDENTIALS,
            params: {
              projectId: projectsStore.personalProject?.id,
              credentialId: "create"
            }
          }
        },
        {
          id: CREATE_PROJECT_ID,
          title: "Project",
          disabled: true
        }
      ];
    }
    return [
      {
        id: WORKFLOWS_MENU_ID,
        title: "Workflow",
        disabled: sourceControlStore.preferences.branchReadOnly,
        ...!sourceControlStore.preferences.branchReadOnly && {
          submenu: [
            {
              id: "workflow-title",
              title: "Create in",
              disabled: true
            },
            {
              id: "workflow-personal",
              title: i18n.baseText("projects.menu.personal"),
              icon: "user",
              disabled: disabledWorkflow(projectsStore.personalProject?.scopes),
              route: {
                name: VIEWS.NEW_WORKFLOW,
                query: { projectId: projectsStore.personalProject?.id }
              }
            },
            ...displayProjects.value.map((project) => ({
              id: `workflow-${project.id}`,
              title: project.name,
              icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
              disabled: disabledWorkflow(project.scopes),
              route: {
                name: VIEWS.NEW_WORKFLOW,
                query: { projectId: project.id }
              }
            }))
          ]
        }
      },
      {
        id: CREDENTIALS_MENU_ID,
        title: "Credential",
        disabled: sourceControlStore.preferences.branchReadOnly,
        ...!sourceControlStore.preferences.branchReadOnly && {
          submenu: [
            {
              id: "credential-title",
              title: "Create in",
              disabled: true
            },
            {
              id: "credential-personal",
              title: i18n.baseText("projects.menu.personal"),
              icon: "user",
              disabled: disabledCredential(projectsStore.personalProject?.scopes),
              route: {
                name: VIEWS.PROJECTS_CREDENTIALS,
                params: { projectId: projectsStore.personalProject?.id, credentialId: "create" }
              }
            },
            ...displayProjects.value.map((project) => ({
              id: `credential-${project.id}`,
              title: project.name,
              icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
              disabled: disabledCredential(project.scopes),
              route: {
                name: VIEWS.PROJECTS_CREDENTIALS,
                params: { projectId: project.id, credentialId: "create" }
              }
            }))
          ]
        }
      },
      {
        id: CREATE_PROJECT_ID,
        title: "Project",
        disabled: !projectsStore.canCreateProjects || !projectsStore.hasPermissionToCreateProjects
      }
    ];
  });
  const createProject = async (uiContext) => {
    isCreatingProject.value = true;
    try {
      const newProject = await projectsStore.createProject({
        name: i18n.baseText("projects.settings.newProjectName"),
        icon: { type: "icon", value: DEFAULT_ICON },
        uiContext
      });
      await router.push({ name: VIEWS.PROJECT_SETTINGS, params: { projectId: newProject.id } });
      toast.showMessage({
        title: i18n.baseText("projects.settings.save.successful.title", {
          interpolate: { projectName: newProject.name }
        }),
        type: "success"
      });
    } catch (error) {
      toast.showError(error, i18n.baseText("projects.error.title"));
    } finally {
      isCreatingProject.value = false;
    }
  };
  const handleSelect = (id) => {
    if (id !== CREATE_PROJECT_ID) return;
    if (projectsStore.canCreateProjects && projectsStore.hasPermissionToCreateProjects) {
      void createProject("universal_button");
      return;
    }
    void usePageRedirectionHelper().goToUpgrade("rbac", "upgrade-rbac");
  };
  const projectsLimitReachedMessage = computed(() => {
    if (settingsStore.isCloudDeployment) {
      return i18n.baseText("projects.create.limitReached.cloud", {
        interpolate: {
          planName: cloudPlanStore.currentPlanData?.displayName ?? "",
          limit: projectsStore.teamProjectsLimit
        }
      });
    }
    if (!projectsStore.isTeamProjectFeatureEnabled) {
      return i18n.baseText("projects.create.limitReached.self");
    }
    if (!projectsStore.hasPermissionToCreateProjects) {
      return i18n.baseText("projects.create.permissionDenied");
    }
    return i18n.baseText("projects.create.limitReached", {
      interpolate: {
        limit: projectsStore.teamProjectsLimit
      }
    });
  });
  const createProjectAppendSlotName = computed(() => `item.append.${CREATE_PROJECT_ID}`);
  const createWorkflowsAppendSlotName = computed(() => `item.append.${WORKFLOWS_MENU_ID}`);
  const createCredentialsAppendSlotName = computed(() => `item.append.${CREDENTIALS_MENU_ID}`);
  const hasPermissionToCreateProjects = projectsStore.hasPermissionToCreateProjects;
  const upgradeLabel = computed(() => {
    if (settingsStore.isCloudDeployment) {
      return i18n.baseText("generic.upgrade");
    }
    if (!projectsStore.isTeamProjectFeatureEnabled) {
      return i18n.baseText("generic.enterprise");
    }
    return i18n.baseText("generic.upgrade");
  });
  return {
    menu,
    handleSelect,
    createProjectAppendSlotName,
    createWorkflowsAppendSlotName,
    createCredentialsAppendSlotName,
    projectsLimitReachedMessage,
    hasPermissionToCreateProjects,
    upgradeLabel,
    createProject,
    isCreatingProject,
    displayProjects
  };
};
const _hoisted_1$1 = {
  key: 0,
  class: "mt-m mb-m"
};
const _hoisted_2 = {
  key: 4,
  class: "mb-m"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectNavigation",
  props: {
    collapsed: { type: Boolean },
    planName: {}
  },
  setup(__props) {
    const props = __props;
    const locale = useI18n();
    const globalEntityCreation = useGlobalEntityCreation();
    const projectsStore = useProjectsStore();
    const settingsStore = useSettingsStore();
    const usersStore = useUsersStore();
    const isCreatingProject = computed(() => globalEntityCreation.isCreatingProject.value);
    const displayProjects = computed(() => globalEntityCreation.displayProjects.value);
    const isFoldersFeatureEnabled = computed(() => settingsStore.isFoldersFeatureEnabled);
    const hasMultipleVerifiedUsers = computed(
      () => usersStore.allUsers.filter((user) => !user.isPendingUser).length > 1
    );
    const home = computed(() => ({
      id: "home",
      label: locale.baseText("projects.menu.overview"),
      icon: "house",
      route: {
        to: { name: VIEWS.HOMEPAGE }
      }
    }));
    const shared = computed(() => ({
      id: "shared",
      label: locale.baseText("projects.menu.shared"),
      icon: "share",
      route: {
        to: { name: VIEWS.SHARED_WITH_ME }
      }
    }));
    const getProjectMenuItem = (project) => ({
      id: project.id,
      label: project.name ?? "",
      icon: project.icon,
      route: {
        to: {
          name: VIEWS.PROJECTS_WORKFLOWS,
          params: { projectId: project.id }
        }
      }
    });
    const personalProject = computed(() => ({
      id: projectsStore.personalProject?.id ?? "",
      label: locale.baseText("projects.menu.personal"),
      icon: "user",
      route: {
        to: {
          name: VIEWS.PROJECTS_WORKFLOWS,
          params: { projectId: projectsStore.personalProject?.id }
        }
      }
    }));
    const showAddFirstProject = computed(
      () => projectsStore.isTeamProjectFeatureEnabled && !displayProjects.value.length
    );
    const activeTabId = computed(() => {
      return (Array.isArray(projectsStore.projectNavActiveId) ? projectsStore.projectNavActiveId[0] : projectsStore.projectNavActiveId) ?? void 0;
    });
    onBeforeMount(async () => {
      await usersStore.fetchUsers();
    });
    return (_ctx, _cache) => {
      const _component_N8nMenuItem = N8nMenuItem;
      const _component_N8nButton = N8nButton;
      const _component_N8nTooltip = Tooltip;
      const _component_N8nText = N8nText;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.projects)
      }, [
        createVNode(unref(ElMenu), {
          collapse: props.collapsed,
          class: "home"
        }, {
          default: withCtx(() => [
            createVNode(_component_N8nMenuItem, {
              item: home.value,
              compact: props.collapsed,
              "active-tab": activeTabId.value,
              mode: "tabs",
              "data-test-id": "project-home-menu-item"
            }, null, 8, ["item", "compact", "active-tab"]),
            unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createBlock(_component_N8nMenuItem, {
              key: 0,
              item: personalProject.value,
              compact: props.collapsed,
              "active-tab": activeTabId.value,
              mode: "tabs",
              "data-test-id": "project-personal-menu-item"
            }, null, 8, ["item", "compact", "active-tab"])) : createCommentVNode("", true),
            (unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value) && hasMultipleVerifiedUsers.value ? (openBlock(), createBlock(_component_N8nMenuItem, {
              key: 1,
              item: shared.value,
              compact: props.collapsed,
              "active-tab": activeTabId.value,
              mode: "tabs",
              "data-test-id": "project-shared-menu-item"
            }, null, 8, ["item", "compact", "active-tab"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["collapse"]),
        unref(projectsStore).isTeamProjectFeatureEnabled ? (openBlock(), createElementBlock("hr", _hoisted_1$1)) : createCommentVNode("", true),
        !props.collapsed && unref(projectsStore).isTeamProjectFeatureEnabled ? (openBlock(), createBlock(_component_N8nText, {
          key: 1,
          class: normalizeClass([_ctx.$style.projectsLabel]),
          tag: "h3",
          bold: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(unref(locale).baseText("projects.menu.title")), 1),
            unref(projectsStore).canCreateProjects ? (openBlock(), createBlock(_component_N8nTooltip, {
              key: 0,
              placement: "right",
              disabled: unref(projectsStore).hasPermissionToCreateProjects,
              content: unref(locale).baseText("projects.create.permissionDenied")
            }, {
              default: withCtx(() => [
                createVNode(_component_N8nButton, {
                  icon: "plus",
                  text: "",
                  "data-test-id": "project-plus-button",
                  disabled: isCreatingProject.value || !unref(projectsStore).hasPermissionToCreateProjects,
                  class: normalizeClass(_ctx.$style.plusBtn),
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(globalEntityCreation).createProject("add_icon"))
                }, null, 8, ["disabled", "class"])
              ]),
              _: 1
            }, 8, ["disabled", "content"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createBlock(unref(ElMenu), {
          key: 2,
          collapse: props.collapsed,
          class: normalizeClass(_ctx.$style.projectItems)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(displayProjects.value, (project) => {
              return openBlock(), createBlock(_component_N8nMenuItem, {
                key: project.id,
                class: normalizeClass({
                  [_ctx.$style.collapsed]: props.collapsed
                }),
                item: getProjectMenuItem(project),
                compact: props.collapsed,
                "active-tab": activeTabId.value,
                mode: "tabs",
                "data-test-id": "project-menu-item"
              }, null, 8, ["class", "item", "compact", "active-tab"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["collapse", "class"])) : createCommentVNode("", true),
        showAddFirstProject.value ? (openBlock(), createBlock(_component_N8nTooltip, {
          key: 3,
          placement: "right",
          disabled: unref(projectsStore).hasPermissionToCreateProjects,
          content: unref(locale).baseText("projects.create.permissionDenied")
        }, {
          default: withCtx(() => [
            createVNode(_component_N8nButton, {
              class: normalizeClass([
                _ctx.$style.addFirstProjectBtn,
                {
                  [_ctx.$style.collapsed]: props.collapsed
                }
              ]),
              disabled: isCreatingProject.value || !unref(projectsStore).hasPermissionToCreateProjects,
              type: "secondary",
              icon: "plus",
              "data-test-id": "add-first-project-button",
              onClick: _cache[1] || (_cache[1] = ($event) => unref(globalEntityCreation).createProject("add_first_project_button"))
            }, {
              default: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(locale).baseText("projects.menu.addFirstProject")), 1)
              ]),
              _: 1
            }, 8, ["class", "disabled"])
          ]),
          _: 1
        }, 8, ["disabled", "content"])) : createCommentVNode("", true),
        unref(projectsStore).isTeamProjectFeatureEnabled ? (openBlock(), createElementBlock("hr", _hoisted_2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const projects = "_projects_jcrfa_123";
const plusBtn = "_plusBtn_jcrfa_131";
const projectItems = "_projectItems_jcrfa_135";
const upgradeLink = "_upgradeLink_jcrfa_141";
const collapsed = "_collapsed_jcrfa_146";
const projectsLabel = "_projectsLabel_jcrfa_150";
const addFirstProjectBtn = "_addFirstProjectBtn_jcrfa_173";
const style0$2 = {
  projects,
  plusBtn,
  projectItems,
  upgradeLink,
  collapsed,
  projectsLabel,
  addFirstProjectBtn
};
const cssModules$2 = {
  "$style": style0$2
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2], ["__scopeId", "data-v-9256cda9"]]);
const BASE_FORUM_URL = "https://github.com/n8n-io/n8n/issues/new?labels=bug-report";
const REPORT_TEMPLATE = `
<!-- Please follow the template below. Skip the questions that are not relevant to you. -->

## Describe the problem/error/question


## What is the error message (if any)?


## Please share your workflow/screenshots/recording

\`\`\`
(Select the nodes on your canvas and use the keyboard shortcuts CMD+C/CTRL+C and CMD+V/CTRL+V to copy and paste the workflow.)
⚠️ WARNING ⚠️ If you have sensitive data in your workflow (like API keys), please remove it before sharing.
\`\`\`


## Share the output returned by the last node
<!-- If you need help with data transformations, please also share your expected output. -->

`;
function useBugReporting() {
  const debugInfo = useDebugInfo();
  const getReportingURL = () => {
    const url = new URL(BASE_FORUM_URL);
    const report = `${REPORT_TEMPLATE}
${debugInfo.generateDebugInfo({ skipSensitive: true, secondaryHeader: true })}}`;
    url.searchParams.append("body", report);
    return url.toString();
  };
  return {
    getReportingURL
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VersionUpdateCTA",
  setup(__props) {
    const i18n = useI18n();
    const versionsStore = useVersionsStore();
    const uiStore = useUIStore();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const telemetry = useTelemetry();
    const openUpdatesPanel = () => {
      uiStore.openModal(VERSIONS_MODAL_KEY);
    };
    const onUpdateClick = async () => {
      telemetry.track("User clicked on update button", {
        source: "main-sidebar"
      });
      await pageRedirectionHelper.goToVersions();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(unref(N8nLink), {
          size: "small",
          theme: "text",
          "data-test-id": "version-update-next-versions-link",
          onClick: openUpdatesPanel
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("whatsNew.versionsBehind", {
              interpolate: {
                count: unref(versionsStore).nextVersions.length > 99 ? "99+" : unref(versionsStore).nextVersions.length
              }
            })), 1)
          ]),
          _: 1
        }),
        createVNode(unref(N8nButton), {
          class: normalizeClass(_ctx.$style.button),
          label: unref(i18n).baseText("whatsNew.update"),
          "data-test-id": "version-update-cta-button",
          size: "mini",
          onClick: onUpdateClick
        }, null, 8, ["class", "label"])
      ], 2);
    };
  }
});
const container = "_container_1hqs4_123";
const button = "_button_1hqs4_136";
const style0$1 = {
  container,
  button
};
const cssModules$1 = {
  "$style": style0$1
};
const VersionUpdateCTA = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = {
  class: "ml-3xs",
  "data-test-id": "main-sidebar-user-menu"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainSidebar",
  setup(__props) {
    const becomeTemplateCreatorStore = useBecomeTemplateCreatorStore();
    const cloudPlanStore = useCloudPlanStore();
    const rootStore = useRootStore();
    const settingsStore = useSettingsStore();
    const templatesStore = useTemplatesStore();
    const uiStore = useUIStore();
    const usersStore = useUsersStore();
    const versionsStore = useVersionsStore();
    const workflowsStore = useWorkflowsStore();
    const sourceControlStore = useSourceControlStore();
    const personalizedTemplatesV2Store = usePersonalizedTemplatesV2Store();
    const { callDebounced } = useDebounce();
    const externalHooks = useExternalHooks();
    const i18n = useI18n();
    useRoute();
    const router = useRouter();
    const telemetry = useTelemetry();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const { getReportingURL } = useBugReporting();
    const calloutHelpers = useCalloutHelpers();
    useKeybindings({
      ctrl_alt_o: () => handleSelect("about")
    });
    const user = ref(null);
    const basePath = ref("");
    const fullyExpanded = ref(false);
    const userMenuItems = ref([
      {
        id: "settings",
        label: i18n.baseText("settings")
      },
      {
        id: "logout",
        label: i18n.baseText("auth.signout")
      }
    ]);
    const showWhatsNewNotification = computed(
      () => versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.some(
        (article) => !versionsStore.isWhatsNewArticleRead(article.id)
      )
    );
    const mainMenuItems = computed(() => [
      {
        id: "cloud-admin",
        position: "bottom",
        label: "Admin Panel",
        icon: "cloud",
        available: settingsStore.isCloudDeployment && hasPermission(["instanceOwner"])
      },
      {
        // Link to in-app pre-built agent templates, available experiment is enabled
        id: "templates",
        icon: "package-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !personalizedTemplatesV2Store.isFeatureEnabled(),
        route: { to: { name: VIEWS.PRE_BUILT_AGENT_TEMPLATES } }
      },
      {
        // Link to templateRecoV2 modal, available when experiment is enabled
        id: "templates",
        icon: "package-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && personalizedTemplatesV2Store.isFeatureEnabled()
      },
      {
        // Link to in-app templates, available if custom templates are enabled and experiment is disabled
        id: "templates",
        icon: "package-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && templatesStore.hasCustomTemplatesHost && !personalizedTemplatesV2Store.isFeatureEnabled(),
        route: { to: { name: VIEWS.TEMPLATES } }
      },
      {
        // Link to website templates, available if custom templates are not enabled
        id: "templates",
        icon: "package-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !templatesStore.hasCustomTemplatesHost && !personalizedTemplatesV2Store.isFeatureEnabled(),
        link: {
          href: templatesStore.websiteTemplateRepositoryURL,
          target: "_blank"
        }
      },
      {
        id: "variables",
        icon: "variable",
        label: i18n.baseText("mainSidebar.variables"),
        position: "bottom",
        route: { to: { name: VIEWS.VARIABLES } }
      },
      {
        id: "insights",
        icon: "chart-column-decreasing",
        label: "Insights",
        position: "bottom",
        route: { to: { name: VIEWS.INSIGHTS } },
        available: settingsStore.isModuleActive("insights") && hasPermission(["rbac"], { rbac: { scope: "insights:list" } })
      },
      {
        id: "help",
        icon: "circle-help",
        label: i18n.baseText("mainSidebar.help"),
        position: "bottom",
        children: [
          {
            id: "quickstart",
            icon: "video",
            label: i18n.baseText("mainSidebar.helpMenuItems.quickstart"),
            link: {
              href: "https://www.youtube.com/watch?v=4cQWJViybAQ",
              target: "_blank"
            }
          },
          {
            id: "docs",
            icon: "book",
            label: i18n.baseText("mainSidebar.helpMenuItems.documentation"),
            link: {
              href: "https://docs.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
              target: "_blank"
            }
          },
          {
            id: "forum",
            icon: "users",
            label: i18n.baseText("mainSidebar.helpMenuItems.forum"),
            link: {
              href: "https://community.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
              target: "_blank"
            }
          },
          {
            id: "examples",
            icon: "graduation-cap",
            label: i18n.baseText("mainSidebar.helpMenuItems.course"),
            link: {
              href: "https://docs.n8n.io/courses/",
              target: "_blank"
            }
          },
          {
            id: "report-bug",
            icon: "bug",
            label: i18n.baseText("mainSidebar.helpMenuItems.reportBug"),
            link: {
              href: getReportingURL(),
              target: "_blank"
            }
          },
          {
            id: "about",
            icon: "info",
            label: i18n.baseText("mainSidebar.aboutN8n"),
            position: "bottom"
          }
        ]
      },
      {
        id: "whats-new",
        icon: "bell",
        notification: showWhatsNewNotification.value,
        label: i18n.baseText("mainSidebar.whatsNew"),
        position: "bottom",
        available: versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.length > 0,
        children: [
          ...versionsStore.whatsNewArticles.map(
            (article) => ({
              id: `whats-new-article-${article.id}`,
              label: article.title,
              size: "small",
              customIconSize: "small",
              icon: {
                type: "emoji",
                value: "•",
                color: !versionsStore.isWhatsNewArticleRead(article.id) ? "primary" : "text-light"
              }
            })
          ),
          {
            id: "full-changelog",
            icon: "external-link",
            label: i18n.baseText("mainSidebar.whatsNew.fullChangelog"),
            link: {
              href: RELEASE_NOTES_URL,
              target: "_blank"
            },
            size: "small",
            customIconSize: "small"
          },
          {
            id: "version-upgrade-cta",
            component: VersionUpdateCTA,
            available: versionsStore.hasVersionUpdates,
            props: {}
          }
        ]
      }
    ]);
    const createBtn = ref();
    const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed);
    const showUserArea = computed(() => hasPermission(["authenticated"]));
    const userIsTrialing = computed(() => cloudPlanStore.userIsTrialing);
    onMounted(async () => {
      window.addEventListener("resize", onResize);
      basePath.value = rootStore.baseUrl;
      if (user.value) {
        void externalHooks.run("mainSidebar.mounted", {
          userRef: user.value
        });
      }
      becomeTemplateCreatorStore.startMonitoringCta();
      await nextTick(onResizeEnd);
    });
    onBeforeUnmount(() => {
      becomeTemplateCreatorStore.stopMonitoringCta();
      window.removeEventListener("resize", onResize);
    });
    const trackHelpItemClick = (itemType) => {
      telemetry.track("User clicked help resource", {
        type: itemType,
        workflow_id: workflowsStore.workflowId
      });
    };
    const onUserActionToggle = (action) => {
      switch (action) {
        case "logout":
          onLogout();
          break;
        case "settings":
          void router.push({ name: VIEWS.SETTINGS });
          break;
      }
    };
    const onLogout = () => {
      void router.push({ name: VIEWS.SIGNOUT });
    };
    const toggleCollapse = () => {
      uiStore.toggleSidebarMenuCollapse();
      if (!isCollapsed.value) {
        setTimeout(() => {
          fullyExpanded.value = !isCollapsed.value;
        }, 300);
      } else {
        fullyExpanded.value = !isCollapsed.value;
      }
    };
    const handleSelect = (key) => {
      switch (key) {
        case "templates":
          if (personalizedTemplatesV2Store.isFeatureEnabled()) {
            uiStore.openModalWithData({
              name: EXPERIMENT_TEMPLATE_RECO_V2_KEY,
              data: {}
            });
            trackTemplatesClick(TemplateClickSource.sidebarButton);
          } else if (settingsStore.isTemplatesEnabled && !templatesStore.hasCustomTemplatesHost) {
            trackTemplatesClick(TemplateClickSource.sidebarButton);
          }
          break;
        case "about": {
          trackHelpItemClick("about");
          uiStore.openModal(ABOUT_MODAL_KEY);
          break;
        }
        case "cloud-admin": {
          void pageRedirectionHelper.goToDashboard();
          break;
        }
        case "quickstart":
        case "docs":
        case "forum":
        case "examples": {
          trackHelpItemClick(key);
          break;
        }
        case "insights":
          telemetry.track("User clicked insights link from side menu");
        default:
          if (key.startsWith("whats-new-article-")) {
            const articleId = Number(key.replace("whats-new-article-", ""));
            telemetry.track("User clicked on what's new section", {
              article_id: articleId
            });
            uiStore.openModalWithData({
              name: WHATS_NEW_MODAL_KEY,
              data: {
                articleId
              }
            });
          }
          break;
      }
    };
    function onResize() {
      void callDebounced(onResizeEnd, { debounceTime: 250 });
    }
    async function onResizeEnd() {
      if (window.innerWidth < 900) {
        uiStore.sidebarMenuCollapsed = true;
      } else {
        uiStore.sidebarMenuCollapsed = uiStore.sidebarMenuCollapsedPreference;
      }
      void nextTick(() => {
        fullyExpanded.value = !isCollapsed.value;
      });
    }
    const {
      menu,
      handleSelect: handleMenuSelect,
      createProjectAppendSlotName,
      createWorkflowsAppendSlotName,
      createCredentialsAppendSlotName,
      projectsLimitReachedMessage,
      upgradeLabel,
      hasPermissionToCreateProjects
    } = useGlobalEntityCreation();
    onClickOutside(createBtn, () => {
      createBtn.value?.close();
    });
    return (_ctx, _cache) => {
      const _component_N8nIcon = N8nIcon;
      const _component_N8nButton = N8nButton;
      const _component_ProjectNavigation = __unplugin_components_2;
      const _component_BecomeTemplateCreatorCta = __unplugin_components_3;
      const _component_MainSidebarSourceControl = __unplugin_components_4;
      const _component_N8nAvatar = N8nAvatar;
      const _component_ElDropdownItem = resolveComponent("ElDropdownItem");
      const _component_ElDropdownMenu = resolveComponent("ElDropdownMenu");
      const _component_ElDropdown = resolveComponent("ElDropdown");
      const _component_N8nText = N8nText;
      const _component_N8nActionDropdown = N8nActionDropdown;
      const _component_N8nMenu = N8nMenu;
      return openBlock(), createElementBlock("div", {
        id: "side-menu",
        class: normalizeClass({
          ["side-menu"]: true,
          [_ctx.$style.sideMenu]: true,
          [_ctx.$style.sideMenuCollapsed]: isCollapsed.value
        })
      }, [
        createBaseVNode("div", {
          id: "collapse-change-button",
          class: normalizeClass(["clickable", _ctx.$style.sideMenuCollapseButton]),
          onClick: toggleCollapse
        }, [
          isCollapsed.value ? (openBlock(), createBlock(_component_N8nIcon, {
            key: 0,
            icon: "chevron-right",
            size: "xsmall",
            class: "ml-5xs"
          })) : (openBlock(), createBlock(_component_N8nIcon, {
            key: 1,
            icon: "chevron-left",
            size: "xsmall",
            class: "mr-5xs"
          }))
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.logo)
        }, [
          createVNode(Logo, {
            location: "sidebar",
            collapsed: isCollapsed.value,
            "release-channel": unref(settingsStore).settings.releaseChannel
          }, {
            default: withCtx(() => [
              unref(sourceControlStore).preferences.branchReadOnly && !isCollapsed.value ? (openBlock(), createBlock(unref(Tooltip), {
                key: 0,
                placement: "bottom"
              }, {
                content: withCtx(() => [
                  createVNode(unref(I18nT), {
                    keypath: "readOnlyEnv.tooltip",
                    scope: "global"
                  }, {
                    link: withCtx(() => [
                      createVNode(unref(N8nLink), {
                        to: "https://docs.n8n.io/source-control-environments/setup/#step-4-connect-n8n-and-configure-your-instance",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.tooltip.link")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(_component_N8nIcon, {
                    "data-test-id": "read-only-env-icon",
                    icon: "lock",
                    size: "xsmall",
                    class: normalizeClass(_ctx.$style.readOnlyEnvironmentIcon)
                  }, null, 8, ["class"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["collapsed", "release-channel"]),
          createVNode(unref(N8nNavigationDropdown), {
            ref_key: "createBtn",
            ref: createBtn,
            "data-test-id": "universal-add",
            menu: unref(menu),
            onSelect: unref(handleMenuSelect)
          }, {
            [unref(createWorkflowsAppendSlotName)]: withCtx(() => [
              unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(Tooltip), {
                key: 0,
                placement: "right",
                content: unref(i18n).baseText("readOnlyEnv.cantAdd.workflow")
              }, {
                default: withCtx(() => [
                  createVNode(_component_N8nIcon, {
                    style: { "margin-left": "auto", "margin-right": "5px" },
                    icon: "lock",
                    size: "xsmall"
                  })
                ]),
                _: 1
              }, 8, ["content"])) : createCommentVNode("", true)
            ]),
            [unref(createCredentialsAppendSlotName)]: withCtx(() => [
              unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(Tooltip), {
                key: 0,
                placement: "right",
                content: unref(i18n).baseText("readOnlyEnv.cantAdd.credential")
              }, {
                default: withCtx(() => [
                  createVNode(_component_N8nIcon, {
                    style: { "margin-left": "auto", "margin-right": "5px" },
                    icon: "lock",
                    size: "xsmall"
                  })
                ]),
                _: 1
              }, 8, ["content"])) : createCommentVNode("", true)
            ]),
            [unref(createProjectAppendSlotName)]: withCtx(({ item }) => [
              unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(Tooltip), {
                key: 0,
                placement: "right",
                content: unref(i18n).baseText("readOnlyEnv.cantAdd.project")
              }, {
                default: withCtx(() => [
                  createVNode(_component_N8nIcon, {
                    style: { "margin-left": "auto", "margin-right": "5px" },
                    icon: "lock",
                    size: "xsmall"
                  })
                ]),
                _: 1
              }, 8, ["content"])) : item.disabled ? (openBlock(), createBlock(unref(Tooltip), {
                key: 1,
                placement: "right",
                content: unref(projectsLimitReachedMessage)
              }, {
                default: withCtx(() => [
                  !unref(hasPermissionToCreateProjects) ? (openBlock(), createBlock(_component_N8nIcon, {
                    key: 0,
                    style: { "margin-left": "auto", "margin-right": "5px" },
                    icon: "lock",
                    size: "xsmall"
                  })) : (openBlock(), createBlock(_component_N8nButton, {
                    key: 1,
                    size: "mini",
                    style: { "margin-left": "auto" },
                    type: "tertiary",
                    onClick: ($event) => unref(handleMenuSelect)(item.id)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(upgradeLabel)), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))
                ]),
                _: 2
              }, 1032, ["content"])) : createCommentVNode("", true)
            ]),
            default: withCtx(() => [
              createVNode(unref(_sfc_main$7), {
                icon: "plus",
                type: "secondary",
                outline: ""
              })
            ]),
            _: 2
          }, 1032, ["menu", "onSelect"])
        ], 2),
        createVNode(_component_N8nMenu, {
          items: mainMenuItems.value,
          collapsed: isCollapsed.value,
          onSelect: handleSelect
        }, createSlots({
          header: withCtx(() => [
            createVNode(_component_ProjectNavigation, {
              collapsed: isCollapsed.value,
              "plan-name": unref(cloudPlanStore).currentPlanData?.displayName
            }, null, 8, ["collapsed", "plan-name"])
          ]),
          beforeLowerMenu: withCtx(() => [
            fullyExpanded.value && !userIsTrialing.value ? (openBlock(), createBlock(_component_BecomeTemplateCreatorCta, { key: 0 })) : createCommentVNode("", true)
          ]),
          menuSuffix: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(_component_MainSidebarSourceControl, { "is-collapsed": isCollapsed.value }, null, 8, ["is-collapsed"])
            ])
          ]),
          _: 2
        }, [
          showUserArea.value ? {
            name: "footer",
            fn: withCtx(() => [
              createBaseVNode("div", {
                ref_key: "user",
                ref: user,
                class: normalizeClass(_ctx.$style.userArea)
              }, [
                createBaseVNode("div", _hoisted_1, [
                  createVNode(_component_ElDropdown, {
                    placement: "right-end",
                    trigger: "click",
                    onCommand: onUserActionToggle
                  }, createSlots({
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        class: normalizeClass({ [_ctx.$style.avatar]: true, ["clickable"]: isCollapsed.value })
                      }, [
                        createVNode(_component_N8nAvatar, {
                          "first-name": unref(usersStore).currentUser?.firstName,
                          "last-name": unref(usersStore).currentUser?.lastName,
                          size: "small"
                        }, null, 8, ["first-name", "last-name"])
                      ], 2)
                    ]),
                    _: 2
                  }, [
                    isCollapsed.value ? {
                      name: "dropdown",
                      fn: withCtx(() => [
                        createVNode(_component_ElDropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_ElDropdownItem, { command: "settings" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("settings")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElDropdownItem, { command: "logout" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("auth.signout")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1024)
                ]),
                createBaseVNode("div", {
                  class: normalizeClass({ ["ml-2xs"]: true, [_ctx.$style.userName]: true, [_ctx.$style.expanded]: fullyExpanded.value })
                }, [
                  createVNode(_component_N8nText, {
                    size: "small",
                    bold: true,
                    color: "text-dark"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(usersStore).currentUser?.fullName), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass({ [_ctx.$style.userActions]: true, [_ctx.$style.expanded]: fullyExpanded.value })
                }, [
                  createVNode(_component_N8nActionDropdown, {
                    items: userMenuItems.value,
                    placement: "top-start",
                    "data-test-id": "user-menu",
                    onSelect: onUserActionToggle
                  }, null, 8, ["items"])
                ], 2)
              ], 2)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "collapsed"])
      ], 2);
    };
  }
});
const sideMenu = "_sideMenu_1w9ys_123";
const logo = "_logo_1w9ys_133";
const sideMenuCollapsed = "_sideMenuCollapsed_1w9ys_144";
const sideMenuCollapseButton = "_sideMenuCollapseButton_1w9ys_153";
const updates = "_updates_1w9ys_172";
const expanded = "_expanded_1w9ys_185";
const userArea = "_userArea_1w9ys_192";
const userName = "_userName_1w9ys_199";
const userActions = "_userActions_1w9ys_213";
const readOnlyEnvironmentIcon = "_readOnlyEnvironmentIcon_1w9ys_225";
const style0 = {
  sideMenu,
  logo,
  sideMenuCollapsed,
  sideMenuCollapseButton,
  updates,
  expanded,
  userArea,
  userName,
  userActions,
  readOnlyEnvironmentIcon
};
const cssModules = {
  "$style": style0
};
const MainSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  MainSidebar as default
};
