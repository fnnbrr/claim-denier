// Modules to control application life and create native browser window
import { app, BrowserWindow, shell } from 'electron';

const createWindow = () =>
{
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        show: false,
        icon: "src/lib/assets/images/prohibited_3d.ico"
    });

    // and load the index.html of the app.
    mainWindow.loadURL("https://claim-denier.pages.dev/");

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // To fill entire screen on start
    mainWindow.maximize();
    mainWindow.show();

    // Makes clicked external links open in a new browser tab/window
    mainWindow.webContents.setWindowOpenHandler(({ url }) =>
    {
        shell.openExternal(url);
        return { action: 'deny' };
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() =>
{
    createWindow();

    app.on('activate', () =>
    {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () =>
{
    if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.