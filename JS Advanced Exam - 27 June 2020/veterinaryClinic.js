class VeterinaryClinic {
    constructor (clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    getPet (owner, petName) {
        if (!owner) {
            return;
        }

        return owner.pets.find(x => x.petName == petName);
    }

    getClient (ownerName) {
        let client = this.clients.find(x => x.ownerName == ownerName);
        return client;
    } 

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload >= this.capacity) {
            throw new Error ('Sorry, we are not able to accept more patients!');
        }

        //check if currently in clinic with procedures
        let currentOwner = this.getClient(ownerName);
        let currentPet = this.getPet(currentOwner, petName);
        if (currentOwner && currentPet) {
            if (currentPet.procedures.length > 0) {
                throw new Error (`This pet is already registered under ${currentOwner.ownerName} name! ${currentPet.petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`)
            } else {
                currentPet.procedures = procedures;
            }

        } else if (!currentOwner) {
            currentOwner = {
                ownerName,
                pets: [],
            };
        
            this.clients.push(currentOwner);
        }

        currentOwner.pets.push({
            petName,
            kind,
            procedures,
        })

        //modify workload
        this.currentWorkload++;

        //return welcome message
        return `Welcome ${petName}!`;
    }

    onLeaving (ownerName, petName) {
        let currentOwner = this.getClient(ownerName);

        if (!currentOwner) {
            throw new Error ('Sorry, there is no such client!');
        }
        let currentPet = this.getPet(currentOwner, petName);

        if (!currentPet || currentPet.procedures.length == 0) {
            throw new Error (`Sorry, there are no procedures for ${petName}!`);
        }

        //add new price 500.00
        this.totalProfit += currentPet.procedures.length * 500;
        //update workload

        this.currentWorkload--;

        //clear procedures of the current pet
        currentPet.procedures = [];
        
        //rerturn Goodbye { petName }. Stay safe!
        return `Goodbye ${currentPet.petName}. Stay safe!`;

    }

    toString () {
        let busyPercentage = Math.floor(this.currentWorkload / this.capacity * 100);
        let result = `${this.clinicName} is ${busyPercentage}% busy today!`;
        result += '\n';
        result += `Total profit: ${this.totalProfit.toFixed(2)}$`;

        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));

        for (const client of this.clients) {
            client.pets.sort((a, b) => a.petName.localeCompare(b.petName));
            result += '\n';
            result += `${client.ownerName} with:`

            for (const pet of client.pets) {
                result += '\n';
                result += `---${pet.petName} - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`
            }
        }

        return result.trim();
    }
}
