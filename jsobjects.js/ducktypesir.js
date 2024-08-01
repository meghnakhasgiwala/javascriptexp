class vscode{
start()
{
    console.log("starting");
    console.log("Editing");
}

}
class pycharm{
    start(){
        console.log("compiling");
        console.log("running");

    }
}
class computer{
    run(editor){
        editor.start();
    }
}
let vs=new vscode();
let pcharm=new pycharm();

let c1= new computer();
c1.run(vs);
console.log("---------------");

let c2= new computer();
c2.run(pcharm);

