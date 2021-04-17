const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

let mainWindow;
function createWindow() {
	mainWindow = new BrowserWindow({
		width: 900,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	let url = `file://${path.join(__dirname, '/build/index.html')}`;

	if (isDev) {
		// parces default port
		url = 'http://localhost:1234';
		mainWindow.webContents.openDevTools();
	}

	mainWindow.loadURL(url);
	mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
