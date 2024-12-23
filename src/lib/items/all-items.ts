import { Item } from "./item.svelte";

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
import insuranceNukeIcon from "$lib/assets/images/fluent-emoji/radioactive_3d.png";

export const allItems: Item[] =
    [
        new Item("intern", "Intern", 0.1, 10, internIcon),
        new Item("rubber-stamp", "Rubber Stamp", 1, 100, rubberStampIcon),
        new Item("paper-shredder", "Paper Shredder", 8, 1_100, paperShredderIcon),
        new Item("denial-hotline", "Denial Hotline", 47, 12_000, denialHotlineIcon),
        new Item("fine-print-magnifier", "Fine Print Magnifier", 260, 130_000, finePrintMagnifierIcon),
        new Item("pre-authorization-maze", "Pre-Authorization Maze", 1_400, 1_400_000, preAuthorizationMazeIcon),
        new Item("legalese-generator", "Legalese Generator", 7_800, 20_000_000, legaleseGeneratorIcon),
        new Item("bureaucracy-bot", "Bureaucracy Bot", 44_000, 330_000_000, bureaucracyBotIcon),
        new Item("coding-overlord", "Coding Overlord", 260_000, 5_100_000_000, codingOverlordIcon),
        new Item("claims-black-hole", "Claims Black Hole", 1_600_000, 75_000_000_000, claimsBlackHoleIcon),
        new Item("ai-denial-algorithm", "AI Denial Algorithm", 10_000_000, 1_000_000_000_000, aiDenialAlgorithmIcon),
        new Item("red-tape-factory", "Red Tape Factory", 65_000_000, 14_000_000_000_000, redTapeFactoryIcon),
        new Item("policy-contradiction-analyzer", "Policy Contradiction Analyzer", 430_000_000, 170_000_000_000_000, policyContradictionAnalyzerIcon),
        new Item("managerial-obfuscator", "Managerial Obfuscator", 2_900_000_000, 2_100_000_000_000_000, managerialObfuscatorIcon),
        new Item("pre-existing-condition-scanner", "Pre-Existing Condition Scanner", 21_000_000_000, 26_000_000_000_000_000, preExistingConditionScannerIcon),
        new Item("claim-vaporizer", "Claim Vaporizer", 150_000_000_000, 310_000_000_000_000_000, claimVaporizerIcon),
        new Item("corporate-compliance-shield", "Corporate Compliance Shield", 1_100_000_000_000, 7_100_000_000_000_000_000, corporateComplianceShieldIcon),
        new Item("denial-overlord-ai", "Denial Overlord AI", 8_300_000_000_000, 120_000_000_000_000_000_000, denialOverlordAIIcon),
        new Item("executive-rejection-suite", "Executive Rejection Suite", 64_000_000_000_000, 1_900_000_000_000_000_000_000, executiveRejectionSuiteIcon),
        new Item("insurance-nuke", "Insurance Nuke", 510_000_000_000_000, 31_000_000_000_000_000_000_000, insuranceNukeIcon),
    ];

