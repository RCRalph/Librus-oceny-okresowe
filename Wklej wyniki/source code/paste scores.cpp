#include <iostream>
#include <fstream>
#include <conio.h>
#include <sstream>
#include <vector>
#include <windows.h>
#include <cmath>

using namespace std;

void printSteps(string message) {
	cout << message << endl;
	char x = _getch();
	system("CLS");
}

bool checkFile(string& path) {
	ifstream file(path);
	return file.is_open();
}

string getFileContent(string& directory) {
	ifstream file(directory);
	stringstream buf;
	buf << file.rdbuf();
	return buf.str();
}

void getPasteList(string& importedText, vector < vector < string > >& exportPointer) {
	vector < string > oneDim;

	string phrase = "";
	for (size_t i = 0; i < importedText.size(); i++) {
		if (importedText[i] == '\n') {
			oneDim.push_back(phrase);
			phrase = "";
		}
		else {
			phrase += importedText[i];
		}
	}
	oneDim.push_back(phrase);

	exportPointer.resize(ceil(oneDim.size() / 5.0));

	for (size_t i = 0; i < oneDim.size(); i++) {
		exportPointer[i / 5].push_back(oneDim[i]);
	}
}

void toClipboard(string& s) {
	OpenClipboard(0);
	EmptyClipboard();
	HGLOBAL hg = GlobalAlloc(GMEM_MOVEABLE, s.size() + 1);
	if (!hg) {
		CloseClipboard();
		return;
	}
	memcpy(GlobalLock(hg), s.c_str(), s.size() + 1);
	GlobalUnlock(hg);
	SetClipboardData(CF_TEXT, hg);
	CloseClipboard();
	GlobalFree(hg);
}

void pressKeys(bool which) { // 0 - ctrl + v, 1 - tab
	INPUT ip;
	ip.type = INPUT_KEYBOARD;
	ip.ki.wScan = 0;
	ip.ki.time = 0;
	ip.ki.dwExtraInfo = 0;

	//keys down
	if (which) {
		ip.ki.wVk = VK_TAB;
		ip.ki.dwFlags = 0;
		SendInput(1, &ip, sizeof(INPUT));
	}
	else {
		ip.ki.wVk = VK_CONTROL;
		ip.ki.dwFlags = 0;
		SendInput(1, &ip, sizeof(INPUT));

		ip.ki.wVk = 'V';
		ip.ki.dwFlags = 0;
		SendInput(1, &ip, sizeof(INPUT));
	}

	//keys up
	if (which) {
		ip.ki.wVk = VK_TAB;
		ip.ki.dwFlags = KEYEVENTF_KEYUP;
		SendInput(1, &ip, sizeof(INPUT));
	}
	else {
		ip.ki.wVk = 'V';
		ip.ki.dwFlags = KEYEVENTF_KEYUP;
		SendInput(1, &ip, sizeof(INPUT));

		ip.ki.wVk = VK_CONTROL;
		ip.ki.dwFlags = KEYEVENTF_KEYUP;
		SendInput(1, &ip, sizeof(INPUT));
	}
}

int main() {
	printSteps("Witaj w programie do wklejania wynikow do Librusa.\n\nNacisnij dowolny przycisk aby rozpoczac.");

	string dir = "./wyniki/wyniki.txt";
	if (!checkFile(dir)) {
		printSteps("Przenies pobrany plik do folderu o nazwie \"wyniki\" i nacisnij dowolny przycisk. Nie zmieniaj nazwy pliku i nie edytuj go!");
	}

	bool OK = false;
	while (!OK) {
		if (checkFile(dir)) {
			OK = true;
		}
		else {
			printSteps("Nie znaleziono pliku. Nacisnij dowolny przycisk aby sprobowac ponownie.");
		}
	}

	string text = getFileContent(dir);
	vector < vector < string > > pasteList;
	getPasteList(text, pasteList);

	for (size_t i = 0; i < pasteList.size(); i++) {
		cout << "Czesc " << i + 1 << "/" << pasteList.size() << endl << endl;
		cout << "Wejdz na strone wpisywania ocen ksztaltujacych i wybierz pole tekstowe nr " << i * 5 + 1 << ", a nastepnie nacisnij prawa strzalke na klawiaturze." << endl;

		while (GetAsyncKeyState(VK_RIGHT) != -32767) {
			Sleep(10);
		}

		for (unsigned short j = 0; j < pasteList[i].size(); j++) {
			toClipboard(pasteList[i][j]);
			pressKeys(0);
			Sleep(100);
			if (i + 1 != pasteList.size() || j + 1 != pasteList[i].size()) {
				pressKeys(1);
				Sleep(100);
			}
		}
		system("CLS");
	}

	return 0;
}