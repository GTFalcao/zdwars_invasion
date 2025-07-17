# ZDoom Wars: Invasion

An invasion mod for Zandronum, to be played as an expansion of ZDoom Wars.


## About the Mod

This is a subset of the popular "ZDoom Wars" mod, specifically designed for **invasion gamemode**:
- **Cooperative PvE gameplay** for any amount of players; 1-4 players recommended
- **Wave-based survival** against increasingly difficult enemy hordes
- **Team building** - work together to create the ultimate monster army

Unlike the original ZDoom Wars which focuses on PvP battles, this invasion variant emphasizes cooperative teamwork against enemies.

The mod has different difficulty levels for 1, 2, 3 and 4 players. Playing with more than 4 players will not increase the amount of enemies and difficulty will therefore decrease significantly.

Enabling max lives (Survival Invasion) is recommended (`sv_maxlives 1`).


## Quick Start (For Players)

If you just want to play the mod:

1. Download the latest pk3 file from the [Releases](../../releases) page
2. Create a Zandronum server with this pk3 loaded after ZDoom Wars, its resources and maps
3. Set the gamemode to invasion and load one of the maps (ZDWINV##)
4. Blast away and watch out for those stray Mancubus fireballs!


## Development Setup (For Contributors)

Want to contribute to the mod? This section will guide you through setting up the development environment, even if you've never used Git, GitHub, or Node.js before.

### Prerequisites

You'll need to install these tools first:

#### 1. Git
Git is a version control system that tracks changes to files.
https://git-scm.com/downloads

#### 2. Node.js
Node.js lets us run JavaScript outside the browser and includes npm (package manager).
- Download from [nodejs.org](https://nodejs.org/) (choose the LTS version)
- This will also install npm automatically

#### 3. GitHub Account
- Create a free account at [github.com](https://github.com)


I also recommend using an editor such as [Visual Studio Code](https://code.visualstudio.com/) to have a much easier time working on this; you can get syntax highlighting from extensions, can easily generate a pk3 with the current content anytime in the integrated command line, and can easily see exactly what you changed in each file with the integrated Git support.

If you want to work on the actual pk3 with Slade or another tool, feel free to - just unpack the pk3 back into the project folder when you want to submit your changes. I definitely recommend giving the VSCode setup a try though, you won't be disappointed and it will change your Doom modding experience forever. (I only use SLADE for this for some of its utilities like translations)

### Setting Up the Project

#### Step 1: Fork the Repository
1. Go to this project's GitHub page
2. Click the "Fork" button in the top-right corner
3. This creates your own copy of the project

#### Step 2: Clone Your Fork
1. On your fork's page, click the green "Code" button
2. Copy the URL (should look like `https://github.com/YOUR_USERNAME/doom_zdwars_invasion.git`)
3. Open a terminal/command prompt
4. Navigate to where you want the project folder
5. Run: `git clone https://github.com/YOUR_USERNAME/doom_zdwars_invasion.git`
6. Enter the project folder: `cd doom_zdwars_invasion`

#### Step 3: Install Dependencies
```bash
npm install
```

### Building the Mod

#### Compile ACS Scripts (if modified)
If you've modified any ACS scripts in the `acs/` folder:
```bash
npm run acc
```

#### Build the PK3 File
To create a playable `zdwinv-current.pk3` file:
```bash
npm run build
```

The built file will be in the `dist/` folder and ready to load in Zandronum.

I recommend setting up a local server loading the pk3 straight from this folder.


## 🧌 Adding New Monsters

Each monster requires two actors:

1. **Modified Monster** - can usually inherit from the original monster if it doesn't have a lot of hardcoded behavior
2. **Spawner** - allows placing the monster on invasion maps

Monsters need certain state jumps and ACS script execution; refer to existing monsters when creating a new one.


## Contributing

Anyone is welcome to contribute to the project. A short summary of how to contribute:

### Making Changes

1. **Create a new branch** for your changes:
   ```bash
   git checkout -b my-new-feature
   ```

2. **Make your changes** using any text editor
   - Add new monsters in `actors/enemies/doom/` or `actors/enemies/heretic/`
   - Include the new file in `DECORATE.dec`
   - Test your changes by building the mod

3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add new monster: [Monster Name]"
   ```

4. **Push to your fork**:
   ```bash
   git push origin my-new-feature
   ```

### Submitting a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch and describe your changes
4. Click "Create Pull Request"


## Testing Your Changes

1. Build the mod: `npm run build`
2. Load `dist/zdwinv-current.pk3` in Zandronum
3. Test on invasion maps (included in `maps/` folder)
4. Verify monsters spawn and behave correctly

