(() => {

    //Aplicando el principio de responsabilidad única
    //Priorizar la composición frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        name        : string;
        gender      : Gender;
        birthdate   : Date;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email       : string;
        role        : string; 
    }

    class User {

        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({email, role} : UserProps
        ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
        return true;
    }
    }

    interface SettingsProps {
        lastOpenFolder  : string;
        workingDirectory: string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({workingDirectory, lastOpenFolder}: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string; 
        workingDirectory: string;
    }

    //clase que va a ser una composición
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({ name, gender, birthdate, email, role, lastOpenFolder, workingDirectory}: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
            this.user.checkCredentials();
        }

    }

    const person1 = new Person({ name: 'Juanita', gender: 'F', birthdate: new Date('1985-10-21') });

    const user1 = new User({email: 'juanita.velez@gmail.com', role: 'Admin'});

    const settings = new Settings({ workingDirectory: '/usr/home', lastOpenFolder: '/home' });

    const userSettings = new UserSettings({
        workingDirectory: settings.workingDirectory,
        lastOpenFolder: settings.lastOpenFolder,
        email: user1.email,
        role: user1.role,
        name: person1.name,
        gender: person1.gender,
        birthdate: person1.birthdate
    })

    console.log({ userSettings, areCredentialsValid: user1.checkCredentials()});

})();