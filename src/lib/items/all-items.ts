import type { Item } from "./item.svelte";
import { BasicItem } from "./basic-item.svelte";

export const allItems = new Map<string, Item>(
    [
        ["intern", new BasicItem("Intern", 0.1, 15)],
        ["rubber-stamp", new BasicItem("Rubber Stamp", 1, 100)],
        ["paper-shredder", new BasicItem("Paper Shredder", 8, 1100)],
        ["denial-hotline", new BasicItem("Denial Hotline", 47, 12000)],
        ["fine-print-magnifier", new BasicItem("Fine Print Magnifier", 260, 130000)],
        ["pre-authorization-maze", new BasicItem("Pre-Authorization Maze", 1400, 1400000)],
        ["legalese-generator", new BasicItem("Legalese Generator", 7800, 20000000)],
        ["bureaucracy-bot", new BasicItem("Bureaucracy Bot 2000", 44000, 330000000)],
        ["coding-overlord", new BasicItem("Coding Overlord", 260000, 5100000000)],
        ["claims-black-hole", new BasicItem("Claims Black Hole", 1600000, 75000000000)],
        ["ai-denial-algorithm", new BasicItem("AI Denial Algorithm", 10000000, 1000000000000)],
        ["red-tape-factory", new BasicItem("Red Tape Factory", 65000000, 14000000000000)],
        ["policy-contradiction-analyzer", new BasicItem("Policy Contradiction Analyzer", 430000000, 170000000000000)],
        ["managerial-obfuscator", new BasicItem("Managerial Obfuscator", 2900000000, 2100000000000000)],
        ["pre-existing-condition-scanner", new BasicItem("Pre-Existing Condition Scanner", 21000000000, 26000000000000000)],
        ["claim-vaporizer", new BasicItem("Claim Vaporizer", 150000000000, 310000000000000000)],
        ["corporate-compliance-shield", new BasicItem("Corporate Compliance Shield", 1100000000000, 7100000000000000000)],
        ["denial-overlord-ai", new BasicItem("Denial Overlord AI", 8300000000000, 120000000000000000000)],
        ["executive-rejection-suite", new BasicItem("Executive Rejection Suite", 64000000000000, 1900000000000000000000)],
        ["insurance-death-star", new BasicItem("Insurance Death Star", 510000000000000, 31000000000000000000000)]
    ]);