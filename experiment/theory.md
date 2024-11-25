<h3>Introduction</h3>

<p>The methods, previously discussed, fit a single function (f(x)) amongst the given data points. This function is then used for interpolation. The procedure used becomes tedious when the number of data points is very large. In such cases, a recently developed method is used. It is known as Spline interpolation.</p>

<p>In this method, some polynomial is fitted between two consecutive datapoints. Thus, the entire function for given set of datapoints consists of number of segments of curves. Each segment of curve is known as Spline.</p>

<h3>Definition :</h3>

<p>&emsp; Spline is a segment of curve (respective to a polynomial) fitted between two consecutive data points. <br>
&emsp; According to the polynomial used, a spline is referred as linear spline, quadratic spline, cubic spline etc.</p>

<br>

<p>Fig. shows spline interpolation. Different functions f<sub>1</sub>, f<sub>2</sub>, etc. are obtained for successive pairs of data points by assuming a polynomial. Assuming these functions to be linear (i.e. straight line segments) it can be noticed that, the function values of both fiunctions meeting at any datapoints are same.</p>

$$ \begin{aligned}
   i.e. \ at \qquad &x = x_2\ \ we\ get\ f_1(x_2) = f_2(x_2) \\
   at \qquad &x = x_3 \ \ we\ get\ f_2(x_3) = f_3(x_3)\ etc.  
\end{aligned} $$

<img src="./images/image1.png" style="width:40%; margin-left:30%">

<p>For better interpolation, the splines must satisfy following three conditions at each junction point (i.e. datapoint);</p>

<ol type="1">
   <li>
      <strong>Continuity condition :</strong> It implies that, the values of both functions meeting at junction (i.e. data point) should be same.
   </li>
   <li><strong>Tangency condition :</strong> It implies that, the tangent drawn to both the curves at the junction should have same slope.</li>
   <li><strong>Curvature condition :</strong> It implies that, the curvature of both functions (i.e. rate of change of slope) at the junction point should be same.</li>
</ol>

<p>A linear spline (a curve for polynomial of degtee one) can satisfy only first condition. <br>
 A quadratic spline (a curve for polynomial of degree two) can satisfy first two conditions.<br>
  While a CUBIC SPLINE (a curve for polynomial of degree three) can satisfy all the three conditions. Hence in practice interpolation is performed using a cubic spline.
</p>

<h3>Derivation :</h3>

<p>The equation of cubic spline which lies between (x<sub>i</sub>, y<sub>i</sub>) and (x<sub>i+1</sub>, y<sub>i+1</sub>) is as below</p>

$$ f_i(x) = a_i(x-x_i)^3 + b_i(x-x_i)^2 + c_i(x-x_i) + d_i \qquad \qquad ... equ(1) $$

<p>We have n + 1 data points so we have f<sub>i</sub>(x) for i= 1 to n. The conditions to meet are</p>

<ol type="1">
   <li>Continuity in the curve</li>
   <li>Tangency continuity</li>
   <li>Curvature continuity</li>
</ol>

<h3>1. Continuity in the curve</h3>

$$ \begin{aligned}
   &f_i(x_i) = y_i \ for \ i=1\ to\ n \qquad \qquad &...equ(2) \\
   &f_i(x_{i+1}) = f_{i +1}(x_{i+1}) \ for\ i=1 \ to \ n-1 \qquad \qquad &...equ(3)
\end{aligned}
$$

<h3>2. Tangency continuity </h3>

$$
   f_i^{'}(x_{i+1}) = f_{i+1}^{'}(x_{i+1}) \ for \ i=1 \ to\ n \qquad \qquad ...equ(4)
$$

<h3>3. Curvature continuity </h3>

$$ 
   f_i^{''}(x_{i+1}) = f_{i+1}^{''}(x_{i+1}) \ for \ i = 1 \ to \ n  \qquad \qquad ...equ(5)
$$

<br>

<p>Now using equation (2) in (1) we get</p>

$$ f_i(x_i) = a_i(x_i-x_i)^3 + b_i(x_i - x_i)^2 + c_i(x_i-x_i) + d_i = y_i $$

$$ ∴ \qquad d_i = y_i \quad i=1 \ to \ n \qquad \qquad ...equ(6) $$

<br>

<p>Similarly using equation (3) in (1) we get</p>

$$
   \begin{aligned}
      y_{i+1} &= a_i(x_{i+1} - x_i)^3 + b_i(x_{i+1} - x_i)^2 + c_i(x_{i+1} - x_i) \\
      &=a_ih_i^3 + b_ih_i^2 + c_ih_i + y_i
   \end{aligned}
$$

$$
For \qquad i=1 \ to \ n \qquad \qquad ...equ(7)
$$

$$
h_i = (x_{i+1} - x_i) \ width \ of\ the\ internal
$$

<p>Now for tangency and curvature continuity are diffentiate equation (1)</p>

$$
\begin{aligned}
   f_i^{'}(x) &= 3a_i(x-x_i)^2 + 2b_i(x-x_i) + c_i \qquad \qquad &...equ(8) \\

f_i^{''}(x) &= 6a_i (x-x_i)+ 2b_i \qquad \qquad &...equ(9) \\ 

For \qquad i&=1 \ to \ n \\ 

Let's \ put \ f_i^{''}(x) &= S_i \ \ for \ i=1\ to \ n \\
∴ \qquad at  \ x &= x_i \\
S_i &= 6a_i(x_i-x_i) + 2b_i = 2b_i \\
∴ \qquad b_i &= \frac{S_i}{2} \qquad \qquad &...equ(10) \\
at \qquad x &= x_{i+1} \\
S_{i+1} &= 6a_i(x_{i+1} - x_i) +2b_i = 6a_ih_i + 2b_i \\
or \qquad a_i &= \frac{S_{i+1}-S_i}{6h_i} \qquad \qquad &...equ(11) \\
∵ \qquad b_i &= \frac{S_i}{2}
\end{aligned}
$$

<p>Now put a<sub>i</sub>, b<sub>i</sub> and d<sub>i</sub> into equation (1) and solving for c<sub>i</sub></p>

$$ \begin{aligned}
   y_{i+1} &= \left(\frac{S_{i+1}-S_i}{6h_i}\right)h_i^3 + \frac{S_i}{2}h_i^2 + c_ih_i + y_i \\
   c_i &= \frac{y_{i+1} - y_i}{h_i} - \frac{2h_iS_i + h_iS_{i+1}}{6} \qquad \qquad ...equ(12)
\end{aligned} $$

<p>Now we use tangency continuity equation (4) at × = x<sub>i</sub> between interval x<sub>i</sub> and x<sub>i+1</sub> from equation (8)</p>

$$
   f_i^{'}(x_i) = y_i^{'} = 3a_i(x_i - x_i)^2 + 2b_i(x_i - x_i) + c_i = c_i \qquad \qquad ...equ(13)
$$

<p>Similarly slope between x<sub>i-1</sub> to x<sub>i</sub> at x = x<sub>i</sub></p>

$$
\begin{aligned}
   y_i^{'} &= 3a_{i-1}(x_i -x_{i-1}) + 2b_i(x_i-x_{i-1}) + c_{i-1} \\
   &= 3a_{i-1}h_{i-1}^2 + 2b_{i-1} + c_{i-1} \qquad \qquad ...equ(14)
\end{aligned}
$$

<p>Equation (13) abd (14)</p>

$$ c_i = 3a_{i-1}h_{i-1}^2+2b_{i-1}h_{i-1}+c_{i-1} $$

<p>Now using c<sub>i</sub>, b<sub>i</sub>, a<sub>i</sub> and d<sub>i</sub> in above equaiton we get</p>

$$
3\left(\frac{S_i - S_{i-1}}{6h_{i-1}}\right)h_{i-1}^2 + 2\left(\frac{S_{i-1}}{2}\right)h_{i-1}+\frac{y_i-y_{i-1}}{h_{i-1}} - \frac{2h_{i-1}S_{i-1}+h_{i-1}S_i}{6}  = \frac{y_{i+1}-y_i}{h_i}-\frac{2h_iS_i+h_iS_{i+1}}{6}
$$

<br>

<p>Rearranging the equation we get</p>

$$
h_{i-1}S_{i-1}+(2h_{i-1} + 2h_i)S_i+h_iS_{i+1} = 6\left(\frac{y_{i+1}-y_i}{h_i} - \frac{y_i - y_{i-1}}{h_{i-1}}\right) = f(x_{i+1}, x_i, x_{i-1}) \qquad \qquad ...equ(15)
$$

<p>where i = 2 so that in equaiton (15) first value S<sub>i-1</sub> will be S<sub>1</sub> and last values of</p>

$$ S_{i+1} = S_{n+1} \ \ at \ \ i = n $$

<p>So i varies from i=2 to n and we have n-1 number of equation.</p>

<p>S<sub>i</sub> (i=1 to n+1) that is S<sub>i</sub> varies from S<sub>1</sub> to S<sub>n+1</sub> because of this we have n+1 unknowns with n-1 equation.</p>

<br>

<p>
&emsp; Now assuming end cubies appraches to linearity <br>
&emsp; i.e. natural spline we get S<sub>1</sub> and S<sub>n+1</sub> = 0. <br>
&emsp; Now n-1 unknows can be solve with n-1 equation.
</p>

<p>From equation (15) i=2 to n</p>

$$ \begin{bmatrix}
   2(h_1 + h_2) & h_2 & & \\
   h_2 & 2(h_2+h_3) & h_3 & \\
   & h_3 & 2(h_3+h_4) & h_4 \\
   & & & \vdots
\end{bmatrix} 
× 
\begin{bmatrix}
   S_1 \\ S_2 \\ S_3 \\ \vdots
\end{bmatrix}
=
\begin{bmatrix}
   f(x_3, x_2, x_1) \\
   f(x_4, x_3, x_2) \\
   f(x_5, x_4, x_3) \\
   \vdots
\end{bmatrix}
$$

<br>

<p>where (S<sub>1</sub>= 0 and S<sub>n+1</sub> = 0)</p>

<p>The above system can be solve with the help of TDMA to get values of S and in turn a<sub>i</sub>, b<sub>i</sub>, c<sub>i</sub> and d<sub>i</sub></p>