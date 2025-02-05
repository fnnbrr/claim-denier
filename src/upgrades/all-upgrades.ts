import { Upgrade } from "./upgrade.svelte";
import { Stats } from "$lib/stats/stat-manager";

import doubleClickIcon from "$lib/assets/images/fluent-emoji/victory_hand_3d_default.png";
import fastInternetIcon from "$lib/assets/images/fluent-emoji/globe_with_meridians_3d.png";
import gripTrainerIcon from "$lib/assets/images/fluent-emoji/handshake_3d.png";
import multithreadedDenialIcon from "$lib/assets/images/fluent-emoji/gear_3d.png";
import keyboardShortcutsIcon from "$lib/assets/images/fluent-emoji/keyboard_3d.png";
import offshoreEfficiencyIcon from "$lib/assets/images/fluent-emoji/sailboat_3d.png";
import laserPrinterIcon from "$lib/assets/images/fluent-emoji/printer_3d.png";
import policyParserIcon from "$lib/assets/images/fluent-emoji/glasses_3d.png";
import batchProcessingIcon from "$lib/assets/images/fluent-emoji/card_file_box_3d.png";
import extraStaplerIcon from "$lib/assets/images/fluent-emoji/linked_paperclips_3d.png";
import legalTeamIcon from "$lib/assets/images/fluent-emoji/balance_scale_3d.png";
import ergonomicMouseIcon from "$lib/assets/images/fluent-emoji/computer_mouse_3d.png";
import serverUpgradeIcon from "$lib/assets/images/fluent-emoji/computer_disk_3d.png";
import autoDenialSoftwareIcon from "$lib/assets/images/fluent-emoji/laptop_3d.png";
import preFilledTemplatesIcon from "$lib/assets/images/fluent-emoji/page_with_curl_3d.png";
import streamlinedPaperworkIcon from "$lib/assets/images/fluent-emoji/file_folder_3d.png";
import dedicatedLineIcon from "$lib/assets/images/fluent-emoji/mobile_phone_3d.png";
import policyOptimizerIcon from "$lib/assets/images/fluent-emoji/magnifying_glass_tilted_right_3d.png";
import aiEnhancerIcon from "$lib/assets/images/fluent-emoji/chart_increasing_3d.png";
import clickMultiplierIcon from "$lib/assets/images/fluent-emoji/fast_up_button_3d.png";
import denialBotIcon from "$lib/assets/images/fluent-emoji/no_pedestrians_3d.png";
import cloudComputingIcon from "$lib/assets/images/fluent-emoji/cloud_3d.png";
import holographicInterfaceIcon from "$lib/assets/images/fluent-emoji/bar_chart_3d.png";
import quantumDenialIcon from "$lib/assets/images/fluent-emoji/atom_symbol_3d.png";
import virtualAssistantIcon from "$lib/assets/images/fluent-emoji/right_anger_bubble_3d.png";
import denialSynergyIcon from "$lib/assets/images/fluent-emoji/two_hearts_3d.png";
import bureaucracyMasteryIcon from "$lib/assets/images/fluent-emoji/trophy_3d.png";
import laserGuidedMouseIcon from "$lib/assets/images/fluent-emoji/telescope_3d.png";
import ultraAutomationIcon from "$lib/assets/images/fluent-emoji/recycling_symbol_3d.png";
import alienTouchIcon from "$lib/assets/images/fluent-emoji/alien_3d.png";

export const allUpgrades: Upgrade[] = [
    new Upgrade("double-click", "Double Click", 15, doubleClickIcon, new Map([[Stats.ScorePerClick, 1]]), undefined),
    new Upgrade("fast-internet", "Fast Internet", 100, fastInternetIcon, undefined, new Map([[Stats.ScorePerSecond, 0.1]])),
    new Upgrade("grip-trainer", "Grip Trainer", 500, gripTrainerIcon, new Map([[Stats.ScorePerClick, 2]]), undefined),
    new Upgrade("multithreaded-denial", "Multithreaded Denial", 1_200, multithreadedDenialIcon, undefined, new Map([[Stats.ScorePerSecond, 0.5]])),
    new Upgrade("keyboard-shortcuts", "Keyboard Shortcuts", 5_000, keyboardShortcutsIcon, new Map([[Stats.ScorePerClick, 5]]), undefined),
    new Upgrade("offshore-efficiency", "Offshore Efficiency", 15_000, offshoreEfficiencyIcon, undefined, new Map([[Stats.ScorePerSecond, 1]])),
    new Upgrade("laser-printer", "Laser Printer", 40_000, laserPrinterIcon, new Map([[Stats.ScorePerClick, 10]]), undefined),
    new Upgrade("policy-parser", "Policy Parser", 100_000, policyParserIcon, undefined, new Map([[Stats.ScorePerSecond, 2]])),
    new Upgrade("batch-processing", "Batch Processing", 250_000, batchProcessingIcon, undefined, new Map([[Stats.ScorePerSecond, 5]])),
    new Upgrade("extra-stapler", "Extra Stapler", 600_000, extraStaplerIcon, new Map([[Stats.ScorePerClick, 15]]), undefined),
    new Upgrade("legal-team", "Legal Team", 1_200_000, legalTeamIcon, undefined, new Map([[Stats.ScorePerSecond, 10]])),
    new Upgrade("ergonomic-mouse", "Ergonomic Mouse", 3_000_000, ergonomicMouseIcon, new Map([[Stats.ScorePerClick, 20]]), undefined),
    new Upgrade("server-upgrade", "Server Upgrade", 7_500_000, serverUpgradeIcon, undefined, new Map([[Stats.ScorePerSecond, 20]])),
    new Upgrade("auto-denial-software", "Auto Denial Software", 15_000_000, autoDenialSoftwareIcon, undefined, new Map([[Stats.ScorePerSecond, 30]])),
    new Upgrade("pre-filled-templates", "Pre-filled Templates", 30_000_000, preFilledTemplatesIcon, new Map([[Stats.ScorePerClick, 30]]), undefined),
    new Upgrade("streamlined-paperwork", "Streamlined Paperwork", 75_000_000, streamlinedPaperworkIcon, undefined, new Map([[Stats.ScorePerSecond, 50]])),
    new Upgrade("dedicated-line", "Dedicated Line", 150_000_000, dedicatedLineIcon, undefined, new Map([[Stats.ScorePerSecond, 75]])),
    new Upgrade("policy-optimizer", "Policy Optimizer", 500_000_000, policyOptimizerIcon, undefined, new Map([[Stats.ScorePerSecond, 100]])),
    new Upgrade("ai-enhancer", "AI Enhancer", 1_000_000_000, aiEnhancerIcon, undefined, new Map([[Stats.ScorePerSecond, 150]])),
    new Upgrade("click-multiplier", "Click Multiplier", 2_500_000_000, clickMultiplierIcon, new Map([[Stats.ScorePerClick, 50]]), undefined),
    new Upgrade("denial-bot", "Denial Bot", 10_000_000_000, denialBotIcon, undefined, new Map([[Stats.ScorePerSecond, 200]])),
    new Upgrade("cloud-computing", "Cloud Computing", 50_000_000_000, cloudComputingIcon, undefined, new Map([[Stats.ScorePerSecond, 300]])),
    new Upgrade("holographic-interface", "Holographic Interface", 200_000_000_000, holographicInterfaceIcon, undefined, new Map([[Stats.ScorePerSecond, 400]])),
    new Upgrade("quantum-denial", "Quantum Denial", 1_000_000_000_000, quantumDenialIcon, undefined, new Map([[Stats.ScorePerSecond, 500]])),
    new Upgrade("virtual-assistant", "Virtual Assistant", 5_000_000_000_000, virtualAssistantIcon, new Map([[Stats.ScorePerClick, 100]]), undefined),
    new Upgrade("denial-synergy", "Denial Synergy", 20_000_000_000_000, denialSynergyIcon, undefined, new Map([[Stats.ScorePerSecond, 750]])),
    new Upgrade("bureaucracy-mastery", "Bureaucracy Mastery", 100_000_000_000_000, bureaucracyMasteryIcon, undefined, new Map([[Stats.ScorePerSecond, 1_000]])),
    new Upgrade("laser-guided-mouse", "Laser-Guided Mouse", 500_000_000_000_000, laserGuidedMouseIcon, new Map([[Stats.ScorePerClick, 200]]), undefined),
    new Upgrade("ultra-automation", "Ultra Automation", 2_000_000_000_000_000, ultraAutomationIcon, undefined, new Map([[Stats.ScorePerSecond, 5_000]])),
    new Upgrade("alien-touch", "Alien Touch", 31_000_000_000_000_000_000_000, alienTouchIcon, new Map([[Stats.ScorePerClick, 100_000]]), undefined)
];
