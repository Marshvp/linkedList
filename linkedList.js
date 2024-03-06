import Node from "./node.js"

class linkedList {
    constructor(){
        this.listHead = null;
        this.size = 0;
    }

    append(value) {
        let newNode = new Node(value)

        if (this.listHead == null) {
            this.listHead = newNode
            return
        } else {
            let currentNode = this.listHead
            while (currentNode.next != null){
                currentNode = currentNode.next
            }
            currentNode.next = newNode;
            this.size++;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.listHead;
        this.listHead = newNode;
        this.size += 1;
    }

    size(){
        return this.size
    }

    head() {
        return this.listHead
    }

    tail() {
        if (this.listHead == null) {
            return null;
        }
        let currentNode = this.listHead;
        while (currentNode.next != null){
            currentNode = currentNode.next;
        } return currentNode
    }

    at(index) {
        if (index < 0) {
            return null;
        }
        let currentNode = this.listHead;
        let count = 0;
        while (currentNode != null) {
            if (count === index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            count++;
        }
        return null;
    }

    pop () {
        if (this.listHead == null) {
            return null;
        }

        if (this.listHead == null) {
            this.listHead == null;
            this.size--;
            return;
        }
        let currentNode = this.listHead;
        let prevNode = null;
        while (currentNode.next != null) {
            prevNode = currentNode;
            currentNode = currentNode.next
        }
        if (prevNode != null) {
            prevNode.next = null;
            this.size--;
        }
        
    }

    contains(value) {
        let currentNode = this.listHead
        while (currentNode != null) {
            if (currentNode.value == value) {
                return true
            }
            currentNode = currentNode.next
        } return false
    }

    find(value) {
        let currentNode = this.listHead;
        let count = 0;
        while (currentNode != null) {
            if (currentNode.value == value) {
                return count
            }
            currentNode = currentNode.next
            count++
        } return null
    }

    toString() {
        let currentNode = this.listHead;
        let string = "";
        while (currentNode != null) {
            string += `(${currentNode.value}) -> `;
            currentNode = currentNode.next;
        } return string + "null"
        
    }

}

export default linkedList