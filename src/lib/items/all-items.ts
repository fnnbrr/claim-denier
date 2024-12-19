import type { Item } from "./item.svelte";
import { BasicItem } from "./basic-item.svelte";

import internIcon from "$lib/assets/images/fluent-emoji/nerd_face_3d.png";
import rubberStampIcon from "$lib/assets/images/fluent-emoji/love_letter_3d.png";
import paperShredderIcon from "$lib/assets/images/fluent-emoji/wastebasket_3d.png";
import denialHotlineIcon from "$lib/assets/images/fluent-emoji/telephone_3d.png";
import finePrintMagnifierIcon from "$lib/assets/images/fluent-emoji/magnifying_glass_tilted_left_3d.png";
import preAuthorizationMazeIcon from "$lib/assets/images/fluent-emoji/cyclone_3d.png";
import legaleseGeneratorIcon from "$lib/assets/images/fluent-emoji/scroll_3d.png";
import bureaucracyBotIcon from "$lib/assets/images/fluent-emoji/robot_3d.png";
import codingOverlordIcon from "$lib/assets/images/fluent-emoji/man_technologist_3d_medium.png";
import claimsBlackHoleIcon from "$lib/assets/images/fluent-emoji/black_circle_3d.png";
import aiDenialAlgorithmIcon from "$lib/assets/images/fluent-emoji/floppy_disk_3d.png";
import redTapeFactoryIcon from "$lib/assets/images/fluent-emoji/factory_3d.png";
import policyContradictionAnalyzerIcon from "$lib/assets/images/fluent-emoji/abacus_3d.png";
import managerialObfuscatorIcon from "$lib/assets/images/fluent-emoji/necktie_3d.png";
import preExistingConditionScannerIcon from "$lib/assets/images/fluent-emoji/microscope_3d.png";
import claimVaporizerIcon from "$lib/assets/images/fluent-emoji/dashing_away_3d.png";
import corporateComplianceShieldIcon from "$lib/assets/images/fluent-emoji/shield_3d.png";
import denialOverlordAIIcon from "$lib/assets/images/fluent-emoji/brain_3d.png";
import executiveRejectionSuiteIcon from "$lib/assets/images/fluent-emoji/office_building_3d.png";
import insuranceNukeIcon from "$lib/assets/images/fluent-emoji/bomb_3d.png";

export const allItems: Item[] =
    [
        new BasicItem("intern", "Intern", 0.1, 15, internIcon),
        new BasicItem("rubber-stamp", "Rubber Stamp", 1, 100, rubberStampIcon),
        new BasicItem("paper-shredder", "Paper Shredder", 8, 1100, paperShredderIcon),
        new BasicItem("denial-hotline", "Denial Hotline", 47, 12000, denialHotlineIcon),
        new BasicItem("fine-print-magnifier", "Fine Print Magnifier", 260, 130000, finePrintMagnifierIcon),
        new BasicItem("pre-authorization-maze", "Pre-Authorization Maze", 1400, 1400000, preAuthorizationMazeIcon),
        new BasicItem("legalese-generator", "Legalese Generator", 7800, 20000000, legaleseGeneratorIcon),
        new BasicItem("bureaucracy-bot", "Bureaucracy Bot", 44000, 330000000, bureaucracyBotIcon),
        new BasicItem("coding-overlord", "Coding Overlord", 260000, 5100000000, codingOverlordIcon),
        new BasicItem("claims-black-hole", "Claims Black Hole", 1600000, 75000000000, claimsBlackHoleIcon),
        new BasicItem("ai-denial-algorithm", "AI Denial Algorithm", 10000000, 1000000000000, aiDenialAlgorithmIcon),
        new BasicItem("red-tape-factory", "Red Tape Factory", 65000000, 14000000000000, redTapeFactoryIcon),
        new BasicItem("policy-contradiction-analyzer", "Policy Contradiction Analyzer", 430000000, 170000000000000, policyContradictionAnalyzerIcon),
        new BasicItem("managerial-obfuscator", "Managerial Obfuscator", 2900000000, 2100000000000000, managerialObfuscatorIcon),
        new BasicItem("pre-existing-condition-scanner", "Pre-Existing Condition Scanner", 21000000000, 26000000000000000, preExistingConditionScannerIcon),
        new BasicItem("claim-vaporizer", "Claim Vaporizer", 150000000000, 310000000000000000, claimVaporizerIcon),
        new BasicItem("corporate-compliance-shield", "Corporate Compliance Shield", 1100000000000, 7100000000000000000, corporateComplianceShieldIcon),
        new BasicItem("denial-overlord-ai", "Denial Overlord AI", 8300000000000, 120000000000000000000, denialOverlordAIIcon),
        new BasicItem("executive-rejection-suite", "Executive Rejection Suite", 64000000000000, 1900000000000000000000, executiveRejectionSuiteIcon),
        new BasicItem("insurance-nuke", "Insurance Nuke", 510000000000000, 31000000000000000000000, insuranceNukeIcon),
    ];
