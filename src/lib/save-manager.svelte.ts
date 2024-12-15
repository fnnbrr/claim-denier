import { Inventory, type InventorySaveData } from "./inventory.svelte";

const saveKey: string = "claim-denier-inventory-save";

if (typeof localStorage !== "undefined")
{
    load();

    // Save every 15 seconds
    setInterval(() =>
    {
        save();
    }, 15000);

    // Save on unfocus/focus/reload/close page
    addEventListener("visibilitychange", save);
}

function load()
{
    const saveString = localStorage.getItem(saveKey);

    if (saveString !== null)
    {
        console.log("Loading save");

        const save: InventorySaveData = JSON.parse(saveString);

        Inventory.instance.loadFromSaveData(save);
    }
}

function save()
{
    console.log("saving");

    const save: InventorySaveData = Inventory.instance.getSaveData();

    localStorage.setItem(saveKey, JSON.stringify(save));
}

function clearSave()
{
    removeEventListener("visibilitychange", save);

    localStorage.clear();

    window.location.reload();
}

declare global
{
    // eslint-disable-next-line no-var
    var clearSave: () => void;
}

globalThis.clearSave = clearSave;