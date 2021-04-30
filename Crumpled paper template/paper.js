class paper
{
	constructor(x,y,r)
	{
		var options={
			//add options



			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			
			//add instructions
			



			pop()
			
	}

}