/** Constructs a type by picking all
 *  properties from type and removing or omiting keys
 */

interface Todo { 
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo : TodoPreview = {
    title: "clean room",
    completed: false,
    createdAt: 1615544252770,
};

todo;