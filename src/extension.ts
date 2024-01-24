import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let saveAndCloseActiveEditorDisposable = vscode.commands.registerCommand('save-and-close-editor.saveAndCloseActiveEditor', async () => {
    // save the document if it has changes
    let isDirty = vscode.window.activeTextEditor?.document.isDirty;
    console.log(`document isDirty: ${isDirty}`);
    if (isDirty) {
      await vscode.commands.executeCommand("workbench.action.files.save");
    }
    vscode.commands.executeCommand("workbench.action.closeActiveEditor");
	});

	context.subscriptions.push(saveAndCloseActiveEditorDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
