import type { Item } from "./item.svelte";
import { BasicItem } from "./basic-item.svelte";

import internIcon from "$lib/assets/images/item-icons/intern.png";
import rubberStampIcon from "$lib/assets/images/item-icons/rubber-stamp.png";
import paperShredderIcon from "$lib/assets/images/item-icons/paper-shredder.png";
import denialHotlineIcon from "$lib/assets/images/item-icons/denial-hotline.png";
import finePrintMagnifierIcon from "$lib/assets/images/item-icons/fine-print-magnifier.png";
import preAuthorizationMazeIcon from "$lib/assets/images/item-icons/pre-authorization-maze.png";
import legaleseGeneratorIcon from "$lib/assets/images/item-icons/legalese-generator.png";
import bureaucracyBotIcon from "$lib/assets/images/item-icons/bureaucracy-bot.png";
import codingOverlordIcon from "$lib/assets/images/item-icons/coding-overlord.png";
import claimsBlackHoleIcon from "$lib/assets/images/item-icons/claims-black-hole.png";
import aiDenialAlgorithmIcon from "$lib/assets/images/item-icons/ai-denial-algorithm.png";
import redTapeFactoryIcon from "$lib/assets/images/item-icons/red-tape-factory.png";
import policyContradictionAnalyzerIcon from "$lib/assets/images/item-icons/policy-contradiction-analyzer.png";
import managerialObfuscatorIcon from "$lib/assets/images/item-icons/managerial-obfuscator.png";
import preExistingConditionScannerIcon from "$lib/assets/images/item-icons/pre-existing-condition-scanner.png";
import claimVaporizerIcon from "$lib/assets/images/item-icons/claim-vaporizer.png";
import corporateComplianceShieldIcon from "$lib/assets/images/item-icons/corporate-compliance-shield.png";
import denialOverlordAIIcon from "$lib/assets/images/item-icons/denial-overlord-ai.png";
import executiveRejectionSuiteIcon from "$lib/assets/images/item-icons/executive-rejection-suite.png";
import insuranceNukeIcon from "$lib/assets/images/item-icons/insurance-nuke.png";

export const allItems = new Map<string, Item>([
    ["intern", new BasicItem("Intern", 0.1, 15, internIcon)],
    ["rubber-stamp", new BasicItem("Rubber Stamp", 1, 100, rubberStampIcon)],
    ["paper-shredder", new BasicItem("Paper Shredder", 8, 1100, paperShredderIcon)],
    ["denial-hotline", new BasicItem("Denial Hotline", 47, 12000, denialHotlineIcon)],
    ["fine-print-magnifier", new BasicItem("Fine Print Magnifier", 260, 130000, finePrintMagnifierIcon)],
    ["pre-authorization-maze", new BasicItem("Pre-Authorization Maze", 1400, 1400000, preAuthorizationMazeIcon)],
    ["legalese-generator", new BasicItem("Legalese Generator", 7800, 20000000, legaleseGeneratorIcon)],
    ["bureaucracy-bot", new BasicItem("Bureaucracy Bot", 44000, 330000000, bureaucracyBotIcon)],
    ["coding-overlord", new BasicItem("Coding Overlord", 260000, 5100000000, codingOverlordIcon)],
    ["claims-black-hole", new BasicItem("Claims Black Hole", 1600000, 75000000000, claimsBlackHoleIcon)],
    ["ai-denial-algorithm", new BasicItem("AI Denial Algorithm", 10000000, 1000000000000, aiDenialAlgorithmIcon)],
    ["red-tape-factory", new BasicItem("Red Tape Factory", 65000000, 14000000000000, redTapeFactoryIcon)],
    ["policy-contradiction-analyzer", new BasicItem("Policy Contradiction Analyzer", 430000000, 170000000000000, policyContradictionAnalyzerIcon)],
    ["managerial-obfuscator", new BasicItem("Managerial Obfuscator", 2900000000, 2100000000000000, managerialObfuscatorIcon)],
    ["pre-existing-condition-scanner", new BasicItem("Pre-Existing Condition Scanner", 21000000000, 26000000000000000, preExistingConditionScannerIcon)],
    ["claim-vaporizer", new BasicItem("Claim Vaporizer", 150000000000, 310000000000000000, claimVaporizerIcon)],
    ["corporate-compliance-shield", new BasicItem("Corporate Compliance Shield", 1100000000000, 7100000000000000000, corporateComplianceShieldIcon)],
    ["denial-overlord-ai", new BasicItem("Denial Overlord AI", 8300000000000, 120000000000000000000, denialOverlordAIIcon)],
    ["executive-rejection-suite", new BasicItem("Executive Rejection Suite", 64000000000000, 1900000000000000000000, executiveRejectionSuiteIcon)],
    ["insurance-nuke", new BasicItem("Insurance Nuke", 510000000000000, 31000000000000000000000, insuranceNukeIcon)],
]);
