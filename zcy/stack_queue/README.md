1、用数组结构实现固定大小的栈和队列
stack.js
<!-- 准备一个变量 next -->
next 1、表示新加进来的数据该放到哪儿		2、表示栈的大小

4		    | 	|
3			|	|
2			|	|	<- next
1			| 2	|	
0			| 1	|
			 ———


queue.js
<!-- 准备三个变量，start、end、size -->

0		    | 1	|	<- start
1	end->	|	|
2			|	|
3			|	|
4			|	|
			 ———

start: 表示如果拿一个数该从哪儿拿
end	: 表示下一个数该放到哪儿
为了不让 start、end 相互牵制，现引入一个变量size。用于表示队列的长度




2、实现一个特殊的栈，在实现栈的基本功能的基础上，再实现返回栈中最小元素的操作。
要求：pop、push、getMin操作的时间复杂度都是O(1)

min_stack.js

4、1021. Remove Outermost Parentheses

	

3、如何仅用栈结构实现队列？如何仅用队列结构实现栈?

用栈实现队列的方式是可以实现的。

	1、准备好两个栈，在入栈，出栈，peek() 时都需要把数据倒出 栈2 中。

	队列实现栈的方式还没实现。

4、题意描述：定义栈的数据结构，请在该类型中实现一个能够找到栈最小元素的min函数。
在该栈调用min、push、pop的时间复杂度都是O(1)

该题目比较简单，用两个栈一个记录栈内数据，另一个记录最小值。

5、判断一个数组是否为回文字符串？
	方法一: 通过两个指针，头指针、尾指针，依次判断是否相等。如果相等就是回文，否则就不是

	方法二: 通过容器，放到栈中，依次判断

[code](https://github.com/zhangwinning/dataStructure/blob/master/zuochengyun/stack_queue/isPalindromeArray.js)

6、判断一个链表是否回文?
	方法一: 这里需要借助容器,(stack 或者 array)
	
	方法二:准备两个指针，快指针、慢指针,快指针一次走两步，慢指针一次走一步。

[code](https://github.com/zhangwinning/dataStructure/blob/master/zuochengyun/stack_queue/isPalindromeArray.js)

7、给一个链表，和一个数值 num。小于num 的放在链表的左边，等于 num 的放在链表的中间，大于 num的放在链表的右边。
	
	方法1️⃣:容器法(借助数组操作),把链表放到数组中，然后在数组中排好序(利用 partition ),然后再从数组中把各个节点连起来即可。
	
	方法2️⃣:利用六个指针，小于区的头、尾指针。等于区的头、尾指针、大于区的头、尾指针。开始如果

[code](https://github.com/zhangwinning/dataStructure/blob/master/zuochengyun/stack_queue/smallerEqualBiggerList.js)

8、给一个数组arr。任意两个不等，找到其中一个局部最小值。要求时间复杂度是 O(logN)

	这个用到了二分查找的逻辑，函数 binarySearch 指明查找排好序的数组中的某个值，存在返回该值索引，否则返回 -1

	给定一个数组。局部最小值一定存在。
	[1,2,3,4,5,6]	==> 局部最小值是 1
	[6,5,4,3,2,1]	==> 局部最小值是 1
	[2,4,6,1,3,5]	==> 局部为2
	[7,4,6,1,3,9]	==> 6 不是 ==> 因为 6两边都是最小，因此两边可以随便找
	[7,10,6,1,3,9]	==> \		 /
						 \		/
						  \	   /

						左右构成这种其实就是,其中必有局部最小值
以下code 是求局部最大值。

[code](https://github.com/zhangwinning/dataStructure/blob/master/zuochengyun/stack_queue/localMin.js)

9、两个单链表相交的一系类问题
	分析:如何判断一个链表是否有环?如果有，则返回第一个进入环的节点，没有则返回 null。
	判断单链表是否存在环，有两种方式
	1、容器法
	2、快指针、慢指针法
