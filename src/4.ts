class Key {
	private signature: number;

	constructor() {
		this.signature = Math.random();
	}

	getSignature() {
		return this.signature;
	}
}

class Person {
	constructor(private key: Key) {
		this.key;
	}

	getKey() {
		return this.key;
	}
}

abstract class House {
	protected door: boolean;
	protected tennants: Person[] = [];

	constructor(protected key: Key) {
		this.door = false;
		this.key = key;
	}

	comeIn(person: Person): void {
		if (this.door === true) {
			this.tennants.push(person);
		}
	}

	abstract openDoor(key: Key): void;
}

class MyHouse extends House {
	openDoor(key: Key): void {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true;
		}
	}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
