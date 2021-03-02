(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{371:function(e,t,o){"use strict";o.r(t);var a=o(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"concurrency-programming"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#concurrency-programming"}},[e._v("#")]),e._v(" Concurrency Programming")]),e._v(" "),o("p",[e._v("Concurrency is the notion of multiple things happening at the same time. With the proliferation of multicore CPUs and the realization that the number of cores in each processor will only increase, software developers need new ways to take advantage of them. Although operating systems like OS X and iOS are capable of running multiple programs in parallel, most of those programs run in the background and perform tasks that require little continuous processor time. It is the current foreground application that both captures the user’s attention and keeps the computer busy. If an application has a lot of work to do but keeps only a fraction of the available cores occupied, those extra processing resources are wasted.")]),e._v(" "),o("h2",{attrs:{id:"grand-central-dispatch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grand-central-dispatch"}},[e._v("#")]),e._v(" Grand Central Dispatch")]),e._v(" "),o("p",[e._v("One of the technologies for starting tasks asynchronously is "),o("code",[e._v("Grand Central Dispatch (GCD)")]),e._v(". This technology takes the thread management code you would normally write in your own applications and moves that code down to the system level. All you have to do is define the tasks you want to execute and add them to an appropriate "),o("code",[e._v("dispatch queue")]),e._v(". GCD takes care of creating the needed threads and of scheduling your tasks to run on those threads. Because the thread management is now part of the system, GCD provides a holistic approach to task management and execution, providing better efficiency than traditional threads.")]),e._v(" "),o("h2",{attrs:{id:"dispatch-queues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dispatch-queues"}},[e._v("#")]),e._v(" Dispatch Queues")]),e._v(" "),o("p",[e._v("Dispatch queues are a "),o("code",[e._v("C-based mechanism")]),e._v(" for executing custom tasks. A dispatch queue executes tasks either serially or concurrently but always in a first-in, first-out order. (In other words, a dispatch queue always dequeues and starts tasks in the same order in which they were added to the queue.) A serial dispatch queue runs only one task at a time, waiting until that task is complete before dequeuing and starting a new one. By contrast, a concurrent dispatch queue starts as many tasks as it can without waiting for already started tasks to finish.")]),e._v(" "),o("p",[e._v("Dispatch queues have other benefits:")]),e._v(" "),o("ul",[o("li",[e._v("They provide a straightforward and simple programming interface.")]),e._v(" "),o("li",[e._v("They offer automatic and holistic thread pool management.")]),e._v(" "),o("li",[e._v("They provide the speed of tuned assembly.")]),e._v(" "),o("li",[e._v("They are much more memory efficient (because thread stacks do not linger in application memory).")]),e._v(" "),o("li",[e._v("They do not trap to the kernel under load.")]),e._v(" "),o("li",[e._v("The asynchronous dispatching of tasks to a dispatch queue cannot deadlock the queue.")]),e._v(" "),o("li",[e._v("They scale gracefully under contention.")]),e._v(" "),o("li",[e._v("Serial dispatch queues offer a more efficient alternative to locks and other synchronization primitives.")])]),e._v(" "),o("p",[e._v("Dispatch queues are part of "),o("strong",[e._v("the Grand Central Dispatch technology")]),e._v(" and are part of the C runtime.")]),e._v(" "),o("h2",{attrs:{id:"operation-queues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#operation-queues"}},[e._v("#")]),e._v(" Operation Queues")]),e._v(" "),o("p",[e._v("An operation queue is the "),o("code",[e._v("Cocoa equivalent")]),e._v(" of a concurrent dispatch queue and is implemented by the "),o("code",[e._v("NSOperationQueue")]),e._v(" class. Whereas dispatch queues always execute tasks in first-in, first-out order, "),o("strong",[e._v("operation queues take other factors into account when determining the execution order of tasks. Primary among these factors is whether a given task depends on the completion of other tasks. You configure dependencies when defining your tasks and can use them to create complex execution-order graphs for your tasks.")])]),e._v(" "),o("p",[e._v("The tasks you submit to an operation queue must be instances of the "),o("code",[e._v("NSOperation")]),e._v(" class. An operation object is an Objective-C object that encapsulates the work you want to perform and any data needed to perform it. Because the NSOperation class is essentially an abstract base class, you typically define custom subclasses to perform your tasks. However, the Foundation framework does include some concrete subclasses that you can create and use as is to perform tasks.")]),e._v(" "),o("p",[e._v("Operation objects generate "),o("code",[e._v("key-value observing (KVO)")]),e._v(" notifications, which can be a useful way of monitoring the progress of your task. "),o("strong",[e._v("Although operation queues always execute operations concurrently, you can use dependencies to ensure they are executed serially when needed.")])]),e._v(" "),o("h2",{attrs:{id:"asynchronous-design-techniques"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-design-techniques"}},[e._v("#")]),e._v(" Asynchronous Design Techniques")]),e._v(" "),o("p",[o("strong",[e._v("Before you even consider redesigning your code to support concurrency, you should ask yourself whether doing so is necessary.")]),e._v(" Concurrency can improve the responsiveness of your code by ensuring that your main thread is free to respond to user events. It can even improve the efficiency of your code by leveraging more cores to do more work in the same amount of time. However, it also adds overhead and increases the overall complexity of your code, making it harder to write and debug your code.")]),e._v(" "),o("p",[e._v("Because it adds complexity, concurrency is not a feature that you can graft onto an application at the end of your product cycle. Doing it right requires careful consideration of the tasks your application performs and the data structures used to perform those tasks. Done incorrectly, you might find your code runs slower than before and is less responsive to the user. Therefore, it is worthwhile to take some time at the beginning of your design cycle to set some goals and to think about the approach you need to take.")]),e._v(" "),o("h2",{attrs:{id:"tips-for-improving-efficiency"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tips-for-improving-efficiency"}},[e._v("#")]),e._v(" Tips for Improving Efficiency")]),e._v(" "),o("p",[e._v("In addition to simply factoring your code into smaller tasks and adding them to a queue, there are other ways to improve the overall efficiency of your code using queues:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Consider computing values directly within your task if memory usage is a factor.")]),e._v(" If your application is already memory bound, computing values directly now may be faster than loading cached values from main memory. Computing values directly uses the registers and caches of the given processor core, which are much faster than main memory. Of course, you should only do this if testing indicates this is a performance win.")]),e._v(" "),o("li",[o("strong",[e._v("Identify serial tasks early and do what you can to make them more concurrent.")]),e._v(" If a task must be executed serially because it relies on some shared resource, consider changing your architecture to remove that shared resource. You might consider making copies of the resource for each client that needs one or eliminate the resource altogether.")]),e._v(" "),o("li",[o("strong",[e._v("Avoid using locks.")]),e._v(" The support provided by dispatch queues and operation queues makes locks unnecessary in most situations. Instead of using locks to protect some shared resource, designate a serial queue (or use operation object dependencies) to execute tasks in the correct order.")]),e._v(" "),o("li",[o("strong",[e._v("Rely on the system frameworks whenever possible.")]),e._v(" The best way to achieve concurrency is to take advantage of the built-in concurrency provided by the system frameworks. Many frameworks use threads and other technologies internally to implement concurrent behaviors. When defining your tasks, look to see if an existing framework defines a function or method that does exactly what you want and does so concurrently. Using that API may save you effort and is more likely to give you the maximum concurrency possible.")])]),e._v(" "),o("h2",{attrs:{id:"when-to-use-threads"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-threads"}},[e._v("#")]),e._v(" When to Use Threads")]),e._v(" "),o("p",[e._v("Although "),o("code",[e._v("operation queues")]),e._v(" and "),o("code",[e._v("dispatch queues")]),e._v(" are the preferred way to perform tasks concurrently, they are not a panacea. Depending on your application, there may still be times when you need to create custom threads. If you do create custom threads, you should strive to create as few threads as possible yourself and you should use those threads only for specific tasks that cannot be implemented any other way.")]),e._v(" "),o("p",[e._v("Threads are still a good way to implement code that must run in real time. "),o("code",[e._v("Dispatch queues")]),e._v(" make every attempt to run their tasks as fast as possible but they do not address real time constraints. If you need more predictable behavior from code running in the background, threads may still offer a better alternative.")]),e._v(" "),o("p",[e._v("As with any threaded programming, you should always use threads judiciously and only when absolutely necessary.")]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("p",[e._v("More information on Markdown can be found at the following links:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://developer.apple.com/videos/play/wwdc2016/720/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer - Concurrent Programming With GCD in Swift 3"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091-CH1-SW1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer - Concurrency Programming Guide"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.freecodecamp.org/news/ios-concurrency/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FreeCodeCamp - How to Build a Multi-Threaded iOS App"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.swiftbysundell.com/articles/task-based-concurrency-in-swift/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SwiftbySundell - Task-based concurrency in Swift"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);