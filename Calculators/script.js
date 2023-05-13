/*
Copyright 2023 Om Rawaley

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

function calculateCylinder()
{
	var cylinderR = document.getElementById("cylinderR").value;
	var cylinderH = document.getElementById("cylinderH").value;

	var cylinderVolume = cylinderR * cylinderR * cylinderH * 3.14;
	var cylinderSurfaceArea = 2 * 3.14 * cylinderR * cylinderR + 2 * 3.14 * cylinderR * cylinderH;

	document.getElementById("cylinderVOut").innerHTML = "Volume: " + cylinderVolume;
	document.getElementById("cylinderSAOut").innerHTML = "Surface Area: " + cylinderSurfaceArea;
}

function calculateTriangularPrism()
{
	var triangularPrismA = document.getElementById("triangularPrismA").value;
	var triangularPrismB = document.getElementById("triangularPrismB").value;
	var triangularPrismC = document.getElementById("triangularPrismC").value;
	var triangularPrismH = document.getElementById("triangularPrismH").value;
	var triangularPrismL = document.getElementById("triangularPrismL").value;

	var triangularPrismVolume = (triangularPrismB * triangularPrismH * triangularPrismL) / 2;
	var triangularPrismSurfaceArea = triangularPrismA * triangularPrismL + triangularPrismB * triangularPrismL + triangularPrismC * triangularPrismL + triangularPrismB * triangularPrismH;

	document.getElementById("triangularPrismVOut").innerHTML = "Volume: " + triangularPrismVolume;
	document.getElementById("triangularPrismSAOut").innerHTML = "Surface Area: " + triangularPrismSurfaceArea;
}

function calculateRectangularPrism()
{
	var rectangularPrismW = document.getElementById("rectangularPrismW").value;
	var rectangularPrismH = document.getElementById("rectangularPrismH").value;
	var rectangularPrismL = document.getElementById("rectangularPrismL").value;

	var rectangularPrismVolume = rectangularPrismW * rectangularPrismH * rectangularPrismL;
	var rectangularPrismSurfaceArea = 2 * (rectangularPrismW * rectangularPrismL + rectangularPrismH * rectangularPrismL + rectangularPrismW * rectangularPrismH);

	document.getElementById("rectangularPrismVOut").innerHTML = "Volume: " + rectangularPrismVolume;
	document.getElementById("rectangularPrismSAOut").innerHTML = "Surface Area: " + rectangularPrismSurfaceArea;
}

function calculateTriangleHypotenuse()
{
	var triangleA = document.getElementById("triangleHypotenuseA").value;
	var triangleB = document.getElementById("triangleHypotenuseB").value;

	var squareSum = triangleA * triangleA + triangleB * triangleB;

	var triangleHypotenuse = Math.sqrt(squareSum);

	document.getElementById("triangleHypotenuseOut").innerHTML = "Hypotenuse: " + triangleHypotenuse;
}

function calculateTriangleLeg()
{
	var triangleA = document.getElementById("triangleLegA").value;
	var triangleC = document.getElementById("triangleLegC").value;

	var squareDifference = triangleC * triangleC - triangleA * triangleA;
	
	var triangleLeg = Math.sqrt(squareDifference);

	document.getElementById("triangleLegOut").innerHTML = "Leg: " + triangleLeg;
}
